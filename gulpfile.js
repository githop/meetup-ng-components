/**
 * Created by githop on 4/6/16.
 */

var gulp = require('gulp'),
    webpack = require('webpack'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    path = require('path'),
    gutil = require('gulp-util'),
    serve = require('browser-sync');


gulp.task('serve', function() {
    var wpConfig = require('./webpack.dev.config');
    var wpCompiler = webpack(wpConfig);
    serve({
        server: {
            baseDir: 'client'
        },
        middleware: [
            webpackDevMiddleware(wpCompiler, {
                stats: {
                    chunks: false,
                    modules: false
                },
                publicPath: wpConfig.output.publicPath
            }),
            webpackHotMiddleware(wpCompiler)
        ]
    });
});