const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const mode = "development";
const enabledSourceMap = mode === "development"

const playersData = require('./src/data')

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
        use: [
          'html-loader',
          {
            loader: 'ejs-html-loader',
            options: {
              playersData: playersData 
            }
          }
        ]
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
      /*{ test: /\.woff$/, loader: 'url?mimetype=application/font-woff&name=[path][name].[ext]' },
      { test: /\.woff2$/, loader: 'url?mimetype=application/font-woff2&name=[path][name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?mimetype=application/octet-stream&name=[path][name].[ext]' },
      { test: /\.eot$/, loader: 'url?mimetype=application/vnd.ms-fontobject&name=[path][name].[ext]' }
    */]
  },
  plugins: [
    //new UglifyJSPlugin(),
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
    port: 8001
  }
}