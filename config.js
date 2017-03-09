/* eslint-disable array-callback-return */

import path from 'path';
import fs from 'fs';

export const ROOT = process.cwd ();

export const packageJSON = JSON.parse (
  fs.readFileSync (path.resolve (
    path.resolve (ROOT, 'package.json')
  ), 'utf8')
);

export const babelrc = JSON.parse (
  fs.readFileSync (path.resolve (
    path.resolve (__dirname, '.babelrc')
  ), 'utf8')
);

/* Creates the externals webpack configuration by reading
   in the node modules listed as dependencies and/or
   peerDependencies in the parent project's package.json */
function createExternalDependencies () {
  const externals = {};
  const { peerDependencies, dependencies } = packageJSON;
  const set = (_dependencies) => {
    Object.keys (_dependencies).map ((dependency) => {
      externals[dependency] = dependency;
    });
  };

  if (dependencies) set (dependencies);
  if (peerDependencies) set (peerDependencies);

  return externals;
}

export const externals = createExternalDependencies ();
