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
    path.resolve (ROOT, '.babelrc')
  ), 'utf8')
);

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
