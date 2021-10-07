const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;
module.exports = {
  mode: 'development',
  devServer: {
    port: 8001,
    historyApiFallback: true,
    hot: false,
    hotOnly: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  module: {
    rules: [
      {
        /* The following line to ask babel
             to compile any file with extension
             .js */
        test: /\.js?$/,

        /* exclude node_modules directory from babel.
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,

        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'header',
        filename: 'remoteEntry.js',
        exposes: {
          './Header': './src/App.js',
        },
      }
    ),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
