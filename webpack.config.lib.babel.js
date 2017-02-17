import webpack from 'webpack';
import path from 'path';
import gutil, { colors } from 'gulp-util';

const BUILD_DIR = path.resolve (__dirname, 'lib');
const INPUT_DIR = path.resolve (__dirname, 'src', 'components');

export const webpackLibConfig = {
  entry: [
    path.resolve (INPUT_DIR, 'index.js')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    library: 'nanostorm-core',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'visionist-semantic-ui': 'visionist-semantic-ui'
  },
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
        loader: 'babel-loader',
        query: {
          plugins: ['add-module-exports']
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
        loader: 'url-loader'
      }
    ]
  }
};

export function webpackLibCompiler (callback) {
  const compiler = webpack (webpackLibConfig);
  compiler.run ((error, stats) => {
    gutil.log (`Successfully bundled '${colors.cyan ('lib')}'`)
    console.log (stats.toString ({ chunks: false, colors: true }));
    if (callback) callback ();
  });
}

export function webpackLibWatcher () {
  const compiler = webpack (webpackLibConfig);
  return compiler.watch ({}, (error, stats) => {
    gutil.log (`Successfully bundled '${colors.cyan ('lib')}'`)
    console.log (stats.toString ({ chunks: false, colors: true }));
  });
}

export default webpackLibConfig;
