const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const path = require('path')

module.exports = {
  mode: "none",
  stats: "none",
  devtool: "source-map",
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'api'),
  //   },
  // },
  plugins: [
    new HtmlWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './api',  //原始位置
          to: './api'  //打包到的位置
        }
      ]
    })
  ],
}
