var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['scss'], function() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('assets/scss/**/*.scss', ['scss']);
  gulp.watch('*.html').on('change', browserSync.reload);
});
 
gulp.task('scss', function () {
    return gulp.src('./assets/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);