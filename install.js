/* eslint-disable no-var, camelcase, import/newline-after-import */

const child_process = require ('child_process');

const packages = [
  'babel-core',
  'babel-eslint',
  'babel-loader',
  'babel-plugin-add-module-exports',
  'babel-plugin-transform-class-properties',
  'babel-plugin-transform-object-rest-spread',
  'babel-preset-es2015',
  'babel-preset-react',
  'css-loader',
  'empty',
  'eslint',
  'eslint-config-airbnb',
  'eslint-plugin-babel',
  'eslint-plugin-flowtype',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-react',
  'file-loader',
  'flow-bin',
  'less',
  'less-loader',
  'react-hot-loader@next', // RHL-3 is currently in beta
  'style-loader',
  'url-loader',
  'webpack',
  'webpack-dashboard',
  'webpack-dev-server'
];

const argv = process.argv.slice (2);
const isYarn = argv.indexOf ('--yarn') !== -1;
const isLatest = argv.indexOf ('--latest') !== -1;

function getPackages () {
  return packages.map ((package) => {
    if (package === 'react-hot-loader@next') return package;
    return isLatest ? (package + '@latest') : package;
  });
}

if (isYarn) {
  child_process.spawn (
    'yarn', [ 'add', '-D' ].concat (getPackages ()),
    { stdio: 'inherit' }
  );
} else {
  child_process.spawn (
    'npm', [ 'i', '-D' ].concat (getPackages ()),
    { stdio: 'inherit' }
  );
}
