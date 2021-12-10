const path = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
require("@babel/polyfill")

const publicPath = "/"
module.exports = {
  // Entry point, from where all extraction should be made
  entry: ["@babel/polyfill", "./src/index.js"],
  // Init webpack rules to collect js, jsx, css files
  module: {
    rules: [
      {
        // Extract and Transpile ES6+ in to ES5
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        // Extract CSS files
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // {
      //   test: /\.(scss|css)$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "theme.css",
      //       },
      //     },
      //     {
      //       loader: "css-loader", // translates CSS into CommonJS
      //     },
      //     { loader: "style-loader" },
      //     {
      //       loader: "less-loader",
      //       options: { javascriptEnabled: true }, // compiles Less to CSS
      //     },
      //   ],
      // },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       plugins: [["import", { libraryName: "antd", style: "less" }]], //--Achieve antd on-demand loading through bable-plugin-import dependency
      //     },
      //   },
      // },
    ],
  },
  // https://webpack.js.org/configuration/output/
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "widget.js",
    chunkFilename: "widget.chunk.js",
    // Output library name
    library: "WidgetByBookinglane",
    libraryTarget: "umd",
    publicPath: publicPath,
    libraryExport: "default",
  },
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    hot: true,
    compress: true,
  },
  // https://webpack.js.org/configuration/plugins/
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "widget.css",
      chunkFilename: "widget.css",
    }),
  ],
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
}
