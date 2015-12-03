var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/index.jsx'
    ],
    libs: [
      'react',
      'react-dom'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name]-[chunkhash].js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
    new webpack.optimize.CommonsChunkPlugin('libs', 'js/commons-[chunkhash].js'),
    new HtmlWebpackPlugin({
      title: 'Webpack React Biolerplate',
      filename: 'index.html',
      minify: { removeComments: true },
      template: 'src/index.template.html'
    }),
    new ExtractTextPlugin('css/[name]-[chunkhash].css')
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
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },

  postcss: function () {
    return [
      require('autoprefixer'),
      require('postcss-color-rebeccapurple'),
    ];
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
