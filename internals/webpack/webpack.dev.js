const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/'
  },
  module: {
    rules: [
      {
        test: /\.(svg)$/,
        use: 'url-loader?limit=10000'
      },
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {plugins: ['react-hot-loader/babel']}
          },
          'ts-loader'
        ]
      },
      // css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[local]__[hash:base64:5]'
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
                require('postcss-reporter')(),
                require('postcss-browser-reporter')
              ]
            }
          }
        ]
      }
    ]
  }
});
