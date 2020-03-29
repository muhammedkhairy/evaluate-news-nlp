const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  //to keep client-side code readable and debuggable
  //we should restrict users from accessing the source map
  devtool: 'source-map', //slowest but keep original source code
  //optimize anf minify js files and css files for production
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({})],
  },
  //extract css in a separate file
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css'
  }),
  new WorkboxPlugin.GenerateSW()],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
})