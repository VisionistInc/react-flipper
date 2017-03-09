 /* eslint-disable import/no-unresolved */

import webpack from 'webpack';
import path from 'path';
import Dashboard from 'webpack-dashboard';
import DashboardPlugin from 'webpack-dashboard/plugin';
import webpackDistConfig from './webpack.config.dist.babel';
import {
  ROOT,
  babelrc
} from './config';

/* Suppresses Webpack 2 `parseQuery` deprecation warning...
  https://github.com/webpack/loader-utils/issues/56 */
process.noDeprecation = true;

const { setData } = new Dashboard ();

export default Object.assign ({}, webpackDistConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    path.resolve (ROOT, 'src/root.hot.jsx'),
    path.resolve (ROOT, 'src/index.html')
  ],
  devtool: 'eval',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    contentBase: path.resolve (ROOT, 'dist'),
    publicPath: '/',
    stats: { colors: true },
    quiet: true
  },
  plugins: [
    new DashboardPlugin (setData),
    new webpack.NamedModulesPlugin (),
    new webpack.HotModuleReplacementPlugin ()
    /* ...webpackDistConfig.plugins */
  ],
  module: {
    rules: [
      ...webpackDistConfig.module.rules.slice (0, 0),
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: Object.assign ({}, babelrc, {
          babelrc: false,
          presets: babelrc.presets.map ((preset) => {
            if (preset === 'es2015') {
              return [ 'es2015', { modules: false } ];
            }
            return preset;
          }),
          plugins: [
            'react-hot-loader/babel',
            ...babelrc.plugins.filter (plugin => plugin !== 'add-module-exports')
          ]
        })
      },
      ...webpackDistConfig.module.rules.slice (1)
    ]
  }
});
