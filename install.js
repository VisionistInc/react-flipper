/* eslint-disable no-var, camelcase, import/newline-after-import */
/* Installs the necessary packages for the webpack config files to work. */

var child_process = require ('child_process');
var yarn = process.argv.slice (2)[0] === '--yarn';
var packages = [
  'babel-core@latest',
  'babel-eslint@latest',
  'babel-loader@latest',
  'babel-plugin-add-module-exports@latest',
  'babel-plugin-transform-class-properties@latest',
  'babel-plugin-transform-object-rest-spread@latest',
  'babel-preset-es2015@latest',
  'babel-preset-react@latest',
  'css-loader@latest',
  'empty@latest',
  'eslint-config-airbnb@latest',
  'eslint-plugin-babel@latest',
  'eslint-plugin-flowtype@latest',
  'eslint-plugin-import@latest',
  'eslint-plugin-jsx-a11y@latest',
  'eslint-plugin-react@latest',
  'file-loader@latest',
  'flow-bin@latest',
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
