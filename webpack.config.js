module.exports = {
  entry: './src/main.js',
  output: {
    path: "./public",
    filename: 'editor.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  }
}
