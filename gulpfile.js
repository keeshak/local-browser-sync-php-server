const browserSync = require('browser-sync');
const gulp = require('gulp');
const gulpConnectPhp = require('gulp-connect-php');

gulp.task('php', function () {
    gulpConnectPhp.server({
        port: 8080,
        keepalive: true
    });
});

gulp.task('sync', function () {
    browserSync.init({
        proxy: 'localhost:8080'
    });
});

gulp.task('watch', function () {
    gulp.watch('**/*.php', browserSync.reload);
});

gulp.task('default', ['php', 'sync', 'watch']);
