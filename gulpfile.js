const gulp = require('gulp');

const webpack = require('webpack-stream');

gulp.task('webpack:dev', () => {

    return gulp.src('client/js/entry.js')
  .pipe(webpack({
      devtool: 'source-map',
      output: {
          filename: 'bundle.js'
      }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', () => {
    return gulp.src('client/**/*.html')
  .pipe(gulp.dest('./build'));
});

gulp.task('css:dev', () => {
    gulp.src(['client/less/*.less'])
    .pipe(less())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('css:dev', () => {
    gulp.src(['node_modules/skeleton-css/css/skeleton.css'])
  .pipe(gulp.dest('./build/css'));
});


gulp.task('build', ['webpack:dev', 'static:dev', 'css:dev']);


gulp.task('default', ['build']);
