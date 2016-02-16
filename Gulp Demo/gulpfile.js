var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    gutil= require('gulp-util');

var jsSources = ['Scripts/Component/*.js'];
var cssSources = ['Content/my-css.css'];

gulp.task('js-concat', function() {
    return gulp.src(jsSources)
        .pipe(concat('combined.js'))
        .pipe(gulp.dest('Scripts'));
});

gulp.task('js-uglify', ['js-concat'], function () {
    return gulp.src('Scripts/combined.js')
        .pipe(rename('combined.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('Scripts'));
});

gulp.task('js-watch', ['js-uglify'], function () {
    gutil.log("javascript file merged");
    browserSync.reload();
});


gulp.task('css-watch', function () {
    gutil.log("css updated");
    browserSync.reload();
});

// use default task to launch Browsersync and watch JS files
gulp.task('sync-browser', ['js-uglify'], function () {

    browserSync.init({
        proxy: "localhost:2000",
        port:3000,
        ghostMode: {
            clicks: false,
            scroll: true
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch([jsSources, cssSources], ['js-watch', 'css-watch']);
});