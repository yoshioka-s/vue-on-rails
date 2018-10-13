'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './frontend/entries/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].js'
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'frontend')],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new VueLoaderPlugin()],

  stats: {
    colors: true
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },

  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/',
    hot: true
  }
}
