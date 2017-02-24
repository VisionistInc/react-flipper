/* eslint-disable no-var, camelcase, import/newline-after-import */
/* Installs the necessary packages for the webpack config files to work. */

var child_process = require ('child_process');
var yarn = process.argv.slice (2)[0] === '--yarn';
var packages = [
  'babel-loader@latest',
  'babel-preset-es2015@latest',
  'babel-preset-react@latest',
  'css-loader@latest',
  'file-loader@latest',
  'less@latest',
  'less-loader@latest',
  'react-hot-loader@next',
  'style-loader@latest',
  'url-loader@latest',
  'webpack@latest',
  'webpack-dev-server@latest'
];

if (yarn) {
  child_process.spawn (
    'yarn', [ 'add', '-D' ].concat (packages),
    { stdio: 'inherit' }
  );
} else {
  child_process.spawn (
    'npm', [ 'i', '-D' ].concat (packages),
    { stdio: 'inherit' }
  );
}
