const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      //   {
      //     test: /\.js$/i,
      //     // use: "./wy-loaders/wy-loader01.js",
      //     // use: "wy-loader01.js",
      //     // use: "wy-loader01",
      //     // loader执行顺序：（NormalLoader）从右往左/从后向前
      //     // PitchLoader的话，按照正常定义的顺序执行（这个loader工作中一般用不上）
      //     use: ["wy-loader01", "wy-loader02", "wy-loader03"],
      //   },
      // {
      //   test: /\.js$/i,
      //   use: {
      //     loader: "wy-loader01",
      //     options: {
      //       name: "wy",
      //       age: 18,
      //     },
      //   },
      // },
      // {
      //   test: /\.js$/i,
      //   use: "wy-loader02",
      //   enforce: "post", // enforce改变loader的执行顺序，pre: 最先执行、post: 最后执行
      // },
      // {
      //   test: /\.js$/i,
      //   use: "wy-loader03",
      // },
      {
        test: /\.js$/i,
        use: {
          loader: "wybabel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.md$/i,
        use: [
          // "html-loader",
          "hymd-loader"
        ]
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", "./wy-loaders"], // loader路径查找问题
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
