const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  //to keep code readable and debuggable
  devtool: 'inline-source-map', //slowest but keep original source code
  entry: './src/client/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'dist'),
    libraryTarget: 'umd',
    library: 'Client'
  },
  module: {
    rules: [
      //handle scss files
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Creates `style` nodes from JS strings
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS
        ]
      },
      // use babel to handle js files
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      //exports HTML as string
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      //handle images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath:'images'
            }
          }
        ],
      },
    ]
  },

  plugins: [
    //clean dist folder
    new CleanWebpackPlugin(),
    //create html in dist folder
    new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname,'src/client/views/index.html')
  })
]
}