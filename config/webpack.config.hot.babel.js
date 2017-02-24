/* eslint-disable import/no-named-as-default, import/no-unresolved */

import webpack from 'webpack';
import path from 'path';
import webpackDistConfig from './webpack.config.dist.babel';
import {
  ROOT,
  babelrc
} from './helpers';

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
    contentBase: path.resolve (ROOT, 'dist'),
    publicPath: '/',
    stats: { colors: true }
  },
  plugins: [
    new webpack.NamedModulesPlugin (),
    new webpack.HotModuleReplacementPlugin ()
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
