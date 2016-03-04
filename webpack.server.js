// var webpack = require("webpack");
var nodeExternals = require('webpack-node-externals');
var path = require('path');
// var fs = require("fs");
// var webpack = require('webpack');
// var fs = require('fs');
// var path = require('path');
// var nodeExternals = require("webpack-node-externals");
// var debug = process.env.NODE_ENV !== "production";
var CopyWebpackPlugin = require('copy-webpack-plugin');
// var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// var nodeModules = {};
// fs.readdirSync('node_modules')
//     .filter(function(x) {
//         return ['.bin'].indexOf(x) === -1;
//     })
//     .forEach(function(mod) {
//         nodeModules[mod] = 'commonjs ' + mod;
//     });
module.exports = [
  {
    target: 'node',
    cache: false,
    context: __dirname,
    debug: false,
    devtool: 'source-map',
    entry: ['./src/server'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.min.js'
    },
    plugins: [],
    module: {
      loaders: [{
        test: /\.json$/,
        loaders: ['json']
      }],
      postLoaders: [{
        test: /\.js$/,
        loaders: ['babel?presets[]=es2015&presets[]=stage-0&presets[]=react'],
        exclude: /node_modules/
      }],
      noParse: /\.min\.js/
    },
    externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
    resolve: {
      modulesDirectories: [
        'src',
        'node_modules',
        'web_modules'
      ],
      extensions: [
        '',
        '.json',
        '.js'
      ]
    },
    node: {
      __dirname: true,
      fs: 'empty'
    }
  },
  {
    context: path.join(__dirname, 'src/app'),
    output: { filename: 'out' },
    plugins: [new CopyWebpackPlugin([{
      from: 'views',
      to: 'dist/views'
    }])]
  }
];
