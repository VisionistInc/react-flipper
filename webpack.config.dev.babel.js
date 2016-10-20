import webpack from 'webpack';
import { resolve } from 'path';

const DIST_DIR = resolve (__dirname, 'dist');
const APP_DIR = resolve (__dirname, 'src', 'website');

export default {
  entry: [
    resolve (APP_DIR, 'index.html'),
    resolve (APP_DIR, 'index.jsx')
  ],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
};
