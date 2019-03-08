const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// plugins
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  // https://webpack.js.org/configuration/devtool/
  devtool: 'hidden-source-map',
  output: {
    chunkFilename: 'bundle.[chunkhash].js',
    publicPath: 'assets/dist/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    })
  ],
  module: {
    rules: [
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      },
      // css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: false,
              importLoaders: 1,
              localIdentName: '[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import')({addDependencyTo: webpack}),
                require('postcss-url')(),
                require('postcss-preset-env')({
                  /* use stage 2 features (defaults) */
                  stage: 2
                }),
                require('postcss-reporter')()
              ]
            }
          }
        ]
      }
    ]
  }
});
