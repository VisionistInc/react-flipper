import webpack from 'webpack';
import path from 'path';
import fs from 'fs';
import webpackDistConfig from './webpack.config.dist.babel';
import {
  DIST_BUILD_DIR,
  DIST_INPUT_DIR,
  BABEL_RC
} from './paths';

const babelrc = JSON.parse (
  fs.readFileSync (path.resolve (BABEL_RC), 'utf8')
);

export default Object.assign ({}, webpackDistConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    path.resolve (DIST_INPUT_DIR, 'root.hot.jsx'),
    path.resolve (DIST_INPUT_DIR, 'index.html')
  ],
  devtool: 'eval',
  devServer: {
    hot: true,
    contentBase: DIST_BUILD_DIR,
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
          presets: babelrc.presets.map ((preset) => {
            if (preset === "es2015") {
              return [ "es2015" , { "modules": false } ]
            } else {
              return preset;
            }
          }),
          plugins: [
            "react-hot-loader/babel",
            ...babelrc.plugins.filter ((plugin) => plugin !== "add-module-exports")
          ]
        })
      },
      ...webpackDistConfig.module.rules.slice (1),
    ]
  }
});
