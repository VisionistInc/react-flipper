import webpack from 'webpack';
import { resolve } from 'path';

const OUTPUT_DIR = resolve (__dirname, 'dist');
const INPUT_DIR = resolve (__dirname, 'src', 'website');

export default {
  entry: [
    resolve (INPUT_DIR, 'index.html'),
    resolve (INPUT_DIR, 'index.jsx')
  ],
  output: {
    path: OUTPUT_DIR,
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
