const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Обрабатывать файлы с расширением .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Использовать загрузчик Babel
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Настройки Babel
          },
        },
      },
      {
        test: /\.css$/, // Обрабатывать файлы с расширением .css
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/, // Обрабатывать файлы с расширением .svg
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Обрабатывать файлы с расширениями .png, .jpg, .jpeg, .gif
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
