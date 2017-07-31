var UglifyJsPlugin = require ("uglifyjs-webpack-plugin");
var path = require ("path");
var fs = require ("fs");
var webpackConfig = require ("./webpack.config");

const ROOT = process.cwd ();
const packageJSON = JSON.parse (
  fs.readFileSync (path.resolve (ROOT, "package.json"), "utf8")
);

module.exports = Object.assign ({}, webpackConfig, {
  entry: [path.resolve (ROOT, "src", "components", "index.js")],
  output: {
    path: path.resolve (ROOT, "lib"),
    filename: "index.js",
    library: packageJSON.name,
    libraryTarget: "umd"
  },
  externals: Object.keys (
    Object.assign ({}, packageJSON.peerDependencies, packageJSON.dependencies)
  ).reduce (function (previous, key) {
    return Object.assign ({}, previous, {
      [key]: key
    });
  }, {}),
  plugins: webpackConfig.plugins.concat ([new UglifyJsPlugin ()])
});
