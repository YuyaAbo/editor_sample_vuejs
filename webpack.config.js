var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: "./public",
    filename: 'react-editor.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ["transform-react-jsx"]
        }
      }
    ]
  }
}
