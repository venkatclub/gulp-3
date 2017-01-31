var gulp = require('gulp');
var sass = require('gulp-sass');
var sass2 = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function(){
    return gulp.src('./node_modules/bootstrap/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('sass2', function(){
    return gulp.src('./app/assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('watch', function(){
    gulp.watch('./node_modules/bootstrap/scss/**/*.scss', [sass]);
    gulp.watch('./app/assets/scss/**/*.scss', [sass2]);
});

gulp.task('default', ['sass', 'sass2'], function(){

});