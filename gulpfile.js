/**
 * Created by githop on 4/6/16.
 */

var gulp = require('gulp'),
    webpack = require('webpack'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    colorsSupported = require('supports-color'),
    path = require('path'),
    serve = require('browser-sync'),
    gutil = require('gulp-util'),
    historyApiFallback = require('connect-history-api-fallback');


gulp.task('html', serve.reload);

gulp.task('watch-html',  function() {
    gulp.watch('client/**/*.html', ['html']);
});

gulp.task('build', function(cb) {
    var wpConfig = require('./webpack.prod.config');
    webpack(wpConfig, function(err, stats) {
        if(err)  {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log('[webpack]', stats.toString({
            colors: colorsSupported,
            chunks: false,
            errorDetails: true
        }));
    });
    cb();
});

gulp.task('serve', ['watch-html'], function() {
    var wpConfig = require('./webpack.dev.config');
    var wpCompiler = webpack(wpConfig);
    serve({
        port: 8989,
        server: {
            baseDir: 'client'
        },
        middleware: [
            historyApiFallback(),
            webpackDevMiddleware(wpCompiler, {
                stats: {
                    colors: colorsSupported,
                    chunks: false,
                    modules: false
                },
                publicPath: wpConfig.output.publicPath,
                watchOptions: {
                    aggregateTimeout: 500,
                    poll: 1000
                }
            }),
            webpackHotMiddleware(wpCompiler)
        ]
    });
});