const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  //to keep code readable and debuggable
  devtool: 'inline-source-map', //slowest but keep original source code
  //configuration to make it work with express server
  devServer: {
    proxy: {
      '/sentiment_analysis': 'http://localhost:3000'
    }
  }
})