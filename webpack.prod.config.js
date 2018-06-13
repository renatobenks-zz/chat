const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const HappyPack = require('happypack');

const CleanPlugin = require('clean-webpack-plugin');

const IS_STAGING = !!(process.env.IS_STAGING | 0);

module.exports = {
  mode: 'production',
  context: path.join(__dirname, './'),
  entry: './src/index.js',
  devtool: IS_STAGING ? 'source-map' : false,
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'static/[chunkhash].js',
    chunkFilename: 'static/chunk-[id]-[chunkhash].js',
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
  plugins: [
    new CleanPlugin(['build'], { verbose: false }),
    new DotEnv({
      path: './.env',
    }),
    new HappyPack({
      id: 'js',
      threads: 4,
      loaders: ['babel-loader'],
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
