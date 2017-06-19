/* eslint-disable import/no-unresolved, import/no-named-as-default */

import webpack from "webpack";
import path from "path";
import Dashboard from "webpack-dashboard";
import DashboardPlugin from "webpack-dashboard/plugin";
import webpackDistConfig from "./webpack.config.dist.babel";
import { ROOT, babelrc } from "./config";

/* Suppresses Webpack 2 `parseQuery` deprecation warning...
  https://github.com/webpack/loader-utils/issues/56 */
process.noDeprecation = true;

const { setData } = new Dashboard ();

export default Object.assign ({}, webpackDistConfig, {
  entry: [
    "react-hot-loader/patch",
    "webpack/hot/only-dev-server",
    ...webpackDistConfig.entry
  ],
  devtool: "eval",
  devServer: {
    hot: true,
    host: "0.0.0.0",
    contentBase: path.resolve (ROOT, "dist"),
    publicPath: "/",
    stats: { colors: true },
    quiet: true
  },
  plugins: [
    new DashboardPlugin (setData),
    new webpack.NamedModulesPlugin (),
    new webpack.HotModuleReplacementPlugin (),
    ...webpackDistConfig.plugins
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: Object.assign ({}, babelrc, {
          babelrc: false,
          presets: babelrc.presets.map (
            preset =>
              preset === "es2015" ? ["es2015", { modules: false }] : preset
          ),
          plugins: ["react-hot-loader/babel", ...babelrc.plugins]
        })
      },
      ...webpackDistConfig.module.rules.slice (1)
    ]
  }
});
