/* eslint-disable no-console, import/no-named-as-default */

import webpack from 'webpack';
import webpackDistConfig from './webpack.config.dist.babel';
import {
  babelrc
} from './config';

export default Object.assign ({}, webpackDistConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/root.hot.jsx',
    './src/index.html'
  ],
  devtool: 'eval',
  devServer: {
    hot: true,
    contentBase: './dist',
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
