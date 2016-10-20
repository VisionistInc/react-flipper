import webpack from 'webpack';
import { resolve } from 'path';

const LIB_DIR = resolve (__dirname, 'lib');
const SRC_DIR = resolve (__dirname, 'src', 'Flipper');

export default {
  entry: [
    resolve (SRC_DIR, 'index.js')
  ],
  output: {
    path: LIB_DIR,
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
