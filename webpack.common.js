const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ outputFile, imgFile, devTool }) => ({
  entry: path.resolve(__dirname, "src/main.js"),
  output: {
    filename: ` ${outputFile}.js`,
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: devTool,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: devTool,
              plugins: [
                require("autoprefixer")({
                  grid: true,
                }),
              ],
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: devTool,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: ` ${imgFile}.[ext]`,
              outputPath: "img",
              publicPath: "img",
              esModule: false, // ← for .vue img file load
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: [
          "babel-loader",
          "eslint-loader",
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: "pug-plain-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },

  resolve: {
    extensions: [".vue", ".js", ".scss", ".ts"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve("src"),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: ` ${outputFile}.css`,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
  ],
});
