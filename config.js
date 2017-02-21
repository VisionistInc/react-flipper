import path from 'path';
import fs from 'fs';

const PACKAGE_JSON = path.resolve (process.cwd (), 'package.json');
const BABEL_RC = path.resolve (process.cwd (), '.babelrc');
const WEBPACK_CONFIG = path.resolve (process.cwd (), '.webpackconfig');

export const packageJSON = JSON.parse (
  fs.readFileSync (path.resolve (PACKAGE_JSON), 'utf8')
);

export const babelrc = JSON.parse (
  fs.readFileSync (path.resolve (BABEL_RC), 'utf8')
);

export const webpackConfig = JSON.parse (
  fs.readFileSync (path.resolve (WEBPACK_CONFIG), 'utf8')
);

export function getExternals () {
  const externals = {};
  const { peerDependencies, dependencies } = packageJSON;
  const set = (_dependencies) => {
    // eslint-disable-next-line array-callback-return
    Object.keys (_dependencies).map ((dependency) => {
      externals[dependency] = dependency;
    });
  };

  if (dependencies) set (dependencies);
  if (peerDependencies) set (peerDependencies);

  return externals;
}

export function getEntry (type) {
  const { entry } = webpackConfig[type];
  return entry instanceof Array
    ? entry.map (_path => path.resolve (_path))
    : [ path.resolve (entry) ];
}

export function getOutput (type) {
  const { output } = webpackConfig[type];
  return path.resolve (output);
}

/* eslint-disable no-new-require, new-cap */
export function getPlugins (type) {
  if (!webpackConfig[type].plugins) return [];
  return webpackConfig[type].plugins.map ((plugin) => {
    if (plugin instanceof Array) {
      const module = plugin[0];
      const options = plugin.filter ((_, i) => i !== 0);
      return new require (module) (...options);
    }
    return new require (plugin);
  });
}
/* eslint-enables no-new-require, new-cap */
