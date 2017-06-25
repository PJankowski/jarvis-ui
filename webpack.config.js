const webpack = require('webpack');
const path = require('path');

const js = {
  test: /\.js$/,
  loader: 'babel-loader',
}

const jsx = {
  test: /\.jsx$/,
  loader: 'babel-loader'
}

const css = {
  test: /\.css$/,
  use: ['style-loader?sourceMap', 'css-loader?sourceMap']
}

module.exports = {
  entry: path.join(__dirname, 'public/src/entry.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [js, jsx, css]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  performance: {
    hints: false
  }
}

process.noDeprecation = true;