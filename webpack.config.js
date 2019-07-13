const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

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
        use: ['html-loader', `ejs-html-loader`]
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
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'res/[name].[ext]'
        }
      },
    ]
  },
  plugins: [
   // new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.ejs'
    }),
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
    host: '0.0.0.0',
    port: 8000
  }
}