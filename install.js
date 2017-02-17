/* Installs the necessary packages for the webpack config files to work. */

var child_process = require ('child_process');
var yarn = process.argv.slice (2)[0] === '--yarn';
var packages = [
  'webpack@latest',
  'webpack-dev-server@latest',
  'react-hot-loader@next',
  'file-loader',
  'style-loader',
  'css-loader',
  'style-loader',
  'less-loader',
  'url-loader',
  'babel-core',
  'babel-loader',
  'babel-preset-es2015',
  'babel-preset-react',
  'babel-plugin-add-module-exports',
  'babel-plugin-transform-class-properties',
  'babel-plugin-transform-object-rest-spread',
  'babel-plugin-transform-function-bind'
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
