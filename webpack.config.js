/**
 * Module dependencies
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Webpack Copy plugin config
 */
const copyPlugin = new CopyWebpackPlugin([
  {
    from: './src/view/index.html',
    to: './index.html',
    force: true,
    flatten: true,
  },
  {
    from: './src/static/host-app-data.json',
    to: './host-app-data.json',
    force: true,
    flatten: true,
  },
]);

/**
 * Webpack Clean plugin config
 */
const pathsToClean = [
  './dist',
];
const cleanPlugin = new CleanWebpackPlugin(pathsToClean);

/**
 * Export
 */
module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  plugins: [
    copyPlugin,
    cleanPlugin,
  ],
};
