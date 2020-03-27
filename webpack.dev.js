const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  //to keep code readable and debuggable
  devtool: 'inline-source-map', //slowest but keep original source code
  entry: './src/client/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'dist'),
    libraryTarget: 'umd',
    library: 'Client'
  }
})