const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const indexParser = function(content, path) {
  return content;
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
};
