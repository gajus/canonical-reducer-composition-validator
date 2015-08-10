var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    eslint = require('gulp-eslint'),
    babel = require('gulp-babel');

require('babel/register');

gulp.task('lint', function () {
    return gulp
        .src(['./src/**/*.js', './tests/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('test', ['lint'], function () {
    return gulp
        .src('./tests/**/*.js', {read: false})
        .pipe(mocha());
});

gulp.task('dist', ['test'], function () {
    return gulp
        .src('./src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch(['./src/**/*', './tests/**/*'], ['default']);
});

gulp.task('default', ['dist']);
