import webpack from 'webpack';
import { resolve } from 'path';

const OUTPUT_DIR = resolve (__dirname, 'lib');
const INPUT_DIR = resolve (__dirname, 'src', 'components');

export default {
  entry: [
    resolve (INPUT_DIR, 'index.js')
  ],
  output: {
    path: OUTPUT_DIR,
    filename: 'index.js',
    library: 'react-flipper',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
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
