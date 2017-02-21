/* eslint-disable no-var, camelcase, import/newline-after-import */
/* Installs the necessary packages for the webpack config files to work. */

var child_process = require ('child_process');
var yarn = process.argv.slice (2)[0] === '--yarn';
var packages = [
  'babel-loader',
  'babel-preset-es2015',
  'babel-preset-react',
  'css-loader',
  'file-loader',
  'less',
  'less-loader',
  'react-hot-loader@next',
  'style-loader',
  'url-loader',
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
