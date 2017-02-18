import path from 'path';
import fs from 'fs';

const PACKAGE_JSON = path.resolve (process.cwd (), 'package.json');
const BABEL_RC = path.resolve (process.cwd (), '.babelrc');
const WEBPACK_RC = path.resolve (process.cwd (), 'webpack.config');

export const packageJSON = JSON.parse (
  fs.readFileSync (path.resolve (PACKAGE_JSON), 'utf8')
);

export const babelrc = JSON.parse (
  fs.readFileSync (path.resolve (BABEL_RC), 'utf8')
);

export const webpackrc = JSON.parse (
  fs.readFileSync (path.resolve (WEBPACK_RC), 'utf8')
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
  const { entry } = webpackrc[type];
  return entry instanceof Array
    ? entry.map (_path => path.resolve (_path))
    : [ path.resolve (entry) ];
}

export function getOutput (type) {
  const { output } = webpackrc[type];
  return path.resolve (output);
}
