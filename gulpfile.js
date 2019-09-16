const browserSync = require('browser-sync');
const gulp = require('gulp');
const gulpConnectPhp = require('gulp-connect-php');

function php(done) {
    browserSync.reload();
    done();
}

function server() {
    gulpConnectPhp.server({
        keepalive: true,
        port: 8080
    });
}

function sync() {
    browserSync.init({
        proxy: 'localhost:8080'
    });
}

function watch() {
    gulp.watch('**/*.php', php);
}

exports.default = gulp.parallel(server, sync, watch);
