/* eslint-disable no-console, import/no-unresolved */

import webpack from 'webpack';
import path from 'path';
import {
  ROOT,
  externals,
  packageJSON
} from './config';

export const webpackLibConfig = {
  entry: [
    path.resolve (ROOT, 'src/components/index.js')
  ],
  output: {
    path: path.resolve (ROOT, 'lib'),
    filename: 'index.js',
    library: packageJSON.name,
    libraryTarget: 'umd'
  },
  externals,
  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin ({ beautify: true })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|less)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader'
      }
    ]
  }
};

export function webpackLibCompiler (callback) {
  const compiler = webpack (webpackLibConfig);
  compiler.run ((error, stats) => {
    console.log ('Successfully bundled \'lib\'');
    console.log (stats.toString ({ chunks: false, colors: true }));
    if (callback) callback ();
  });
}

export function webpackLibWatcher () {
  const compiler = webpack (webpackLibConfig);
  return compiler.watch ({}, (error, stats) => {
    console.log ('Successfully bundled \'lib\'');
    console.log (stats.toString ({ chunks: false, colors: true }));
  });
}

export default webpackLibConfig;
