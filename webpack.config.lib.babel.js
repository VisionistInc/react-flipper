import webpack from 'webpack';
import path from 'path';
import fs from 'fs';
import {
  LIB_BUILD_DIR,
  LIB_INPUT_DIR,
  PACKAGE_JSON
} from './paths';

const packageJSON = JSON.parse (
  fs.readFileSync (path.resolve (PACKAGE_JSON), 'utf8')
);

function externals () {
  const externals = {};
  const {
    peerDependencies,
    dependencies
  } = packageJSON;

  const set = (dependencies) => {
    Object.keys (dependencies).map ((dependency) => {
      externals[dependency] = dependency;
    });
  }

  if (dependencies) set (dependencies);
  if (peerDependencies) set (peerDependencies);

  return externals;
}

export const webpackLibConfig = {
  entry: [
    path.resolve (LIB_INPUT_DIR, 'index.js')
  ],
  output: {
    path: LIB_BUILD_DIR,
    filename: 'index.js',
    library: packageJSON.name,
    libraryTarget: 'umd'
  },
  externals: externals (),
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin ({
      beautify: true
    }),
    new webpack.DefinePlugin ({
      'process.env.CORE_ENV': JSON.stringify (
        'production'
      )
    })
  ],
  module : {
    rules : [
      {
        test : /\.(js|jsx)?/,
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
    console.log (`Successfully bundled 'lib'`)
    console.log (stats.toString ({ chunks: false, colors: true }));
    if (callback) callback ();
  });
}

export function webpackLibWatcher () {
  const compiler = webpack (webpackLibConfig);
  return compiler.watch ({}, (error, stats) => {
    console.log (`Successfully bundled 'lib'`)
    console.log (stats.toString ({ chunks: false, colors: true }));
  });
}

export default webpackLibConfig;
