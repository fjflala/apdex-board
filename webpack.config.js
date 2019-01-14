/**
 * Module dependencies
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
 * Styles config
 */
const styleExtractPlugin = new ExtractTextPlugin({
  filename: 'main.css',
});

/**
 * Export
 */
module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: styleExtractPlugin.extract({
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    copyPlugin,
    cleanPlugin,
    styleExtractPlugin,
  ],
};
