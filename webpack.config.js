const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: { index: './src/index.js', register: './src/components/register.html', login: './src/components/login.html', about: './src/components/about.html', contact: './src/components/contact.html'},
 output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist'),
 },
 module: {
  rules: [
   {
    test: /\.html$/,
    use: ['html-loader'],
   },
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: './src/index.html',
   filename: 'index.html',
   chunks: ['index'],
  }),
  new HtmlWebpackPlugin({
   template: './src/components/register.html',
   filename: 'register.html',
   chunks: ['register'],
  }),
  new HtmlWebpackPlugin({
   template: './src/components/login.html',
   filename: 'login.html',
   chunks: ['login'],
  }),
  new HtmlWebpackPlugin({
   template: './src/components/about.html',
   filename: 'about.html',
   chunks: ['about'],
  }),
  new HtmlWebpackPlugin({
   template: './src/components/contact.html',
   filename: 'contact.html',
   chunks: ['contact'],
  })
 ],
 devServer: {
  static: {
   directory: path.join(__dirname, 'dist'),
  },
  port: 3000,
  open: true,
 },
 resolve: {
  alias: {
   // Define aliases here
   '@bootstrap': path.resolve(__dirname, 'node_modules/bootstrap/dist'),
   // Add more aliases for frequently used paths if needed
  },
 },
};