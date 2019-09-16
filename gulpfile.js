const browserSync = require('browser-sync');
const gulp = require('gulp');
const php = require('gulp-connect-php');

gulp.task('php', function () {
    php.server({
        port: 8080,
        keepalive: true
    });
});

gulp.task('browserSync', ['php'], function () {
    browserSync.init({
        proxy: 'localhost:8080'
    });
});

gulp.task('default', ['browserSync'], function () {
    gulp.watch('**/*.php', browserSync.reload);
});
