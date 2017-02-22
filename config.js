/* eslint-disable array-callback-return */

import path from 'path';
import fs from 'fs';

const PACKAGE_JSON = path.resolve (process.cwd (), 'package.json');
const BABEL_RC = path.resolve (process.cwd (), '.babelrc');

export const packageJSON = JSON.parse (
  fs.readFileSync (path.resolve (PACKAGE_JSON), 'utf8')
);

export const babelrc = JSON.parse (
  fs.readFileSync (path.resolve (BABEL_RC), 'utf8')
);

const _externals = {};
const { peerDependencies, dependencies } = packageJSON;
const set = (_dependencies) => {
  Object.keys (_dependencies).map ((dependency) => {
    _externals[dependency] = dependency;
  });
};

if (dependencies) set (dependencies);
if (peerDependencies) set (peerDependencies);

export const externals = _externals;
