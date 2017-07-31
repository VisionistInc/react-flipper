var UglifyJsPlugin = require ("uglifyjs-webpack-plugin");
var HtmlWebpackPlugin = require ("html-webpack-plugin");
var path = require ("path");
var fs = require ("fs");
var webpackConfig = require ("./webpack.config");

const ROOT = process.cwd ();
const packageJSON = JSON.parse (
  fs.readFileSync (path.resolve (ROOT, "package.json"), "utf8")
);

module.exports = Object.assign ({}, webpackConfig, {
  entry: ["babel-polyfill", path.resolve (ROOT, "src", "root.jsx")],
  plugins: webpackConfig.plugins.concat ([
    new HtmlWebpackPlugin ({
      title: packageJSON.name,
      template: path.resolve (ROOT, "src", "templates", "index.html"),
      inject: "body",
      filename: "index.html"
    }),
    new UglifyJsPlugin ({ sourceMap: true })
  ])
});
