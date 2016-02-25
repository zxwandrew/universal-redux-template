var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = [{
  target: 'node',
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    "server.min.js": "./server.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  resolve:{
      extenstions: ['.jsx', '.js', '']
  },
  output: {
    path: __dirname + "/dist/",
    filename: "[name]"
  },
  externals: nodeModules,
  plugins: debug ? [
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
},{
  context: path.join(__dirname, "src/app"),
  output:{
    filename: "out"
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'views', to: 'dist/views'}
    ])
  ]
}
];
