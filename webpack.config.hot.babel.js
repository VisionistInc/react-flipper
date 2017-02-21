/* eslint-disable no-console */

import webpack from 'webpack';
import webpackDistConfig from './webpack.config.dist.babel';
import {
  babelrc,
  getEntry,
  getOutput
} from './webpackrc';

export default Object.assign ({}, webpackDistConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    ...getEntry ('hot')
  ],
  devtool: 'eval',
  devServer: {
    hot: true,
    contentBase: getOutput ('dist'),
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
        query: Object.assign ({}, babelrc, {
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
