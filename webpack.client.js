var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  target: 'web',
  cache: false,
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: ['./src/client.js'],
  module: {
    loaders: [{
      test: /\.json$/,
      loaders: ['json']
    }],
    postLoaders: [{
      test: /\.js$/,
      loaders: ['babel?presets[]=es2015&presets[]=stage-0&presets[]=react'],
      exclude: [/node_modules/, /bower_components/]
    }],
    noParse: /\.min\.js/
  },
  externals: [    {'esri': 'arcgis-js-api'},
      {'esri/map': "arcgis-js-api/map.js"},
      {'esri/views/SceneView': "views/SceneView.js"},
      {'dojo/domReady': 'dojo/domReady'}
  ],
  resolve: {
    root: [path.join(__dirname, "bower_components")],
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
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'client.min.js'
  },
  plugins: debug ? [] : [
    new webpack.ResolverPlugin(
    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
),
new webpack.dependencies.LabeledModulesPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    })
  ]
};
