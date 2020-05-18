const webpackMerge = require("webpack-merge");
const commonConf = require("./webpack.common");
const devTool = true;
const outputFile = "[name]";
const imgFile = "[name]";

module.exports = () =>
  webpackMerge(commonConf({ outputFile, imgFile, devTool }), {
    mode: "development",
    devtool: "source-map",
  });
