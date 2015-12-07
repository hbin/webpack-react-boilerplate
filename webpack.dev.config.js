var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './src/index.jsx'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  externals: {
    'jquery': 'jQuery'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('development')
      },
      __DEVTOOLS__: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack React Biolerplate',
      filename: 'index.html',
      minify: {},
      template: 'src/index.template.html'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }
    ]
  },

  postcss: function () {
    return [
      require('autoprefixer'),
      require('postcss-color-rebeccapurple')
    ];
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
