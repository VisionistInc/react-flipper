import webpack from 'webpack';
import path from 'path';
import fs from 'fs';
import webpackDistConfig, {
  BUILD_DIR,
  INPUT_DIR
} from './webpack.config.dist.babel';

const babelrc = JSON.parse (
  fs.readFileSync (
    path.resolve (__dirname, '.babelrc'), 'utf8'
  )
);

export default Object.assign ({}, webpackDistConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    path.resolve (INPUT_DIR, 'root.hot.jsx'),
    path.resolve (INPUT_DIR, 'index.html')
  ],
  devtool: 'eval',
  devServer: {
    hot: true,
    contentBase: BUILD_DIR,
    publicPath: '/',
    stats: { colors: true }
  },
  plugins: [
    new webpack.NamedModulesPlugin (),
    new webpack.HotModuleReplacementPlugin (),
    ...webpackDistConfig.plugins
  ],
  module: {
    rules: [
      ...webpackDistConfig.module.rules.slice (0, 0),
      {
        test : /\.(js|jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: Object.assign ({}, babelrc, {
          babelrc: false,
          presets: [
            [ "es2015" , { "modules": false } ],
              ...babelrc.presets.slice (1)
          ],
          plugins: [
            "react-hot-loader/babel",
            ...babelrc.plugins
          ]
        })
      },
      ...webpackDistConfig.module.rules.slice (1),
    ]
  }
});
