module.exports = {
  devServer: {
    publicPath: '/dist/',
    watchContentBase: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};