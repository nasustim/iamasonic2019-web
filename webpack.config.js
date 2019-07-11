const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const mode = "development";
const enabledSourceMap = mode === "development"

module.exports = {
  mode,
  entry: './src/index.ts',
  output: {
    path: `${__dirname}/docs`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.ejs$/,
        use: ['html-loader', 'ejs-html-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2,
              sourceMap: enabledSourceMap
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      },
      {
        test: /\.jpg$|\.png$|\.gif$/,
        use: ["file-loader"] 
      },
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.ejs'
    })
  ],
  resolve: {
    extensions: [
      '.ts',
      '.ejs',
      '.js',
      '.scss',
      '.css'
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    port: 8000
  }
}