'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './frontend/entries/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].js',
  },

  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    }, {
      test: /\.sass$/,
      use: ['vue-style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],

  stats: {
    colors: true
  },
  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/',
    hot: true
  }
}
