var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('yeomme-compile-sass', function() {
    return gulp
        .src('stylesheets/master.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch('stylesheets/**/*.scss', ['yeomme-compile-sass']);
});