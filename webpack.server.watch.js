var webpack = require('webpack');
var config = require('./webpack.server.js');

config[0].cache = true;
config[0].debug = true;
config[0].entry.unshift('webpack/hot/poll?1000');

config[0].plugins = [
  new webpack.ResolverPlugin(
    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
),
  new webpack.dependencies.LabeledModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];
module.exports = config;
