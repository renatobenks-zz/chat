const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const HappyPack = require('happypack');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const webpackServeWaitpage = require('webpack-serve-waitpage');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './'),
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/],
        use: 'happypack/loader?id=js',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: 'happypack/loader?id=styles',
      },
    ],
  },
  serve: {
    content: [__dirname],
    port: PORT,
    host: HOST,
    logLevel: 'debug', // default is info
    add: (app, middleware, options) => {
      app.use(
        webpackServeWaitpage(options, {
          title: 'Creditas',
          theme: 'material',
        }),
      );

      // see: https://github.com/bripkens/connect-history-api-fallback#options
      app.use(convert(history({})));
    },
    dev: {
      logLevel: 'debug',
      stats: {
        assets: true,
        colors: true,
        version: false,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
      },
    },
  },
  plugins: [
    new DotEnv({
      path: './.env',
    }),
    new HappyPack({
      id: 'js',
      threads: 4,
      loaders: ['babel-loader?cacheDirectory'],
    }),
    new HappyPack({
      id: 'styles',
      threads: 2,
      loaders: ['style-loader', 'css-loader'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunksSortMode: 'none',
    }),
  ],
};
