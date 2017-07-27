const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const indexParser = function(content, path) {
  return content;
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const destinationFolder = 'public';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, destinationFolder)
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: destinationFolder
  },
  plugins: [
    new CleanWebpackPlugin(
      [destinationFolder],
      {
        "verbose": true,
      }
    ),
    new CopyWebpackPlugin([
      { from: 'src/index.html', transform: indexParser },
      { from: 'src/favicon.ico' },
      { from: 'src/css/', to: 'css' },
      { from: 'src/img/*.*', to: 'img', flatten: true },
    ]),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  }
};
