const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const opn = require('opn');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], 
          },
        },
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/, 
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, 
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      sourceMap: true,
    }),
  ],
  devServer: {
    open: false,
    onAfterSetupMiddleware: function () {
      opn('http://localhost:8080', { app: ['google chrome'] });
    },
  },

};
