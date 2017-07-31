var webpack = require ("webpack");
var path = require ("path");

const ROOT = process.cwd ();

module.exports = {
  output: {
    filename: "bundle.js",
    path: path.resolve (ROOT, "dist"),
    publicPath: ""
  },
  devtool: "source-map",
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin ({
      "process.env": {
        NODE_ENV: JSON.stringify (process.env.NODE_ENV || "production")
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|less)$/,
        loaders: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: "url-loader",
        options: {
          limit: "300000",
          name: "[name].[ext]",
          root: "."
        }
      }
    ]
  }
};
