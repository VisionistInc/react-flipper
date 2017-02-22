/* eslint-disable no-console */

import webpack from 'webpack';

export const webpackDistConfig = {
  entry: [
    './src/root.jsx',
    './src/index.html'
  ],
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ico|html)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
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
        loader: 'url-loader',
        options: {
          limit: '300000',
          name: '[name].[ext]',
          root: '.'
        }
      }
    ]
  }
};

export function webpackDistCompiler (callback) {
  const compiler = webpack (webpackDistConfig);
  compiler.run ((error, stats) => {
    console.log ('Successfully bundled \'dist\'');
    console.log (stats.toString ({ chunks: false, colors: true }));
    if (callback) callback ();
  });
}

export function webpackDistWatcher () {
  const compiler = webpack (webpackDistConfig);
  return compiler.watch ({}, (error, stats) => {
    console.log ('Successfully bundled \'dist\'');
    console.log (stats.toString ({ chunks: false, colors: true }));
  });
}

export default webpackDistConfig;
