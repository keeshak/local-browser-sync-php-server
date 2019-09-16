const browserSync = require('browser-sync');
const gulp = require('gulp');
const gulpConnectPhp = require('gulp-connect-php');

function php() {
    gulpConnectPhp.server({
        keepalive: true,
        port: 8080
    });
}

function reload(done) {
    browserSync.reload();
    done();
}

function sync() {
    browserSync.init({
        proxy: 'localhost:8080'
    });
}

function watch() {
    gulp.watch('**/*.php', reload);
}

exports.default = gulp.parallel(php, sync, watch);
