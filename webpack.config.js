const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'scripts.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),
    // new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [
          'style-loader',
          'css-loader',
          // {
          //   loader: 'css-loader',
          //   options: {
          //     importLoaders: 1,
          //     modules: true,
          //   },
          // },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
