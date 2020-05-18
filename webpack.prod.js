const webpackMerge = require("webpack-merge");
const commonConf = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");
const optimizeCssPlugin = require("optimize-css-assets-webpack-plugin");
const devTool = false;
const outputFile = "[name].[chunkhash]";
const imgFile = "[contenthash]";

module.exports = () =>
  webpackMerge(commonConf({ outputFile, imgFile, devTool }), {
    mode: "production",
    optimization: {
      minimizer: [new TerserPlugin(), new optimizeCssPlugin()],
    },
  });
