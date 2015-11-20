var gulp = require('gulp'),
	  gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    coffee = require('gulp-coffee'),
    sass = require('gulp-ruby-sass'),
    livereload = require('gulp-livereload');

/* compile coffee */
gulp.task('coffee', function () {
   return gulp.src('coffee/*.coffee')
      .pipe(coffee({bare: true}).on('error', gutil.log))
      .pipe(gulp.dest('build/js'))
      .pipe(livereload({}));
});

/* compile sass */
gulp.task('sass', function () {
  return sass('sass/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('build/css'))
    .pipe(livereload({}));
});

/* webpack */


/* livereload */
gulp.task('livereload', function() {
    livereload.listen();
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('coffee/*.coffee', ['coffee']);
});

/* default */
gulp.task('default', ['coffee', 'sass', 'livereload'], function() {
	console.log("ACTECH-[]~(￣▽￣)~*");
});