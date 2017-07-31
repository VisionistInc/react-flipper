var webpack = require ("webpack");
var path = require ("path");
var Dashboard = require ("webpack-dashboard");
var DashboardPlugin = require ("webpack-dashboard/plugin");
var webpackConfig = require ("./webpack.config.website");

const ROOT = process.cwd ();
const setData = new Dashboard ().setData;

module.exports = Object.assign ({}, webpackConfig, {
  entry: [
    webpackConfig.entry[0],
    "react-hot-loader/patch",
    "webpack/hot/only-dev-server"
  ].concat (webpackConfig.entry.slice (1)),
  devServer: {
    hot: true,
    host: "0.0.0.0",
    contentBase: path.resolve (ROOT, "dist"),
    publicPath: "/",
    stats: { colors: true },
    quiet: true
  },
  plugins: webpackConfig.plugins.concat ([
    new DashboardPlugin (setData),
    new webpack.NamedModulesPlugin (),
    new webpack.HotModuleReplacementPlugin ()
  ])
});
