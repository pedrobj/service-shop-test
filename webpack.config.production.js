const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|scss|css)$/, // Check for sass or scss file names
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
    loaders: [
      { test: /\.json$/, loader: 'json' },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
    }),
  ],
};
