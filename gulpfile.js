const { series } = require('gulp');
const gulp = require('gulp');
var sass = require('gulp-sass');        
var prefix = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

function errorLog(error) {
  console.error.bind(error);
}

gulp.task('sass', function() {
  gulp.src('css/*.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .on('error', errorLog)
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});

// WATCH
gulp.task('watch', function() {
  gulp.watch('css/*.scss', ['sass']);
});

// DEFAULT
exports.default = series(sass, watch);