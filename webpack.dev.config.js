/**
 * Created by githop on 4/6/16.
 */

var webpack = require('webpack');
var config  = require('./webpack.config');

config.devtool = 'inline-source-map';
config.entry = {
    app: [
        'webpack-hot-middleware/client?reload=true',
        './client/app.module.js'
    ]
};
config.output = {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: '/webpack-dist'
};

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;