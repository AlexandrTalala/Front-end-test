/**
 * Created by Alex on 10.05.2016.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require("gulp-rename"),
    notify = require("gulp-notify"),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');
gulp.task('css', function() {
    return gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(concat("css/style.css"))
    .pipe(minifyCSS())
    .pipe(rename("css/style.min.css"))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))
    .pipe(notify("Done!"))
    .pipe(gulp.dest("./dist"));
});
gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(notify("Done JS!"))
        .pipe(gulp.dest('./dist/js/'))
});
gulp.task('default', function() {
	gulp.watch('src/**/*.js',['js']);       
	gulp.watch('src/**/*.less',['css']);
    
});
