var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var rigger = require('gulp-rigger');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var mmq = require('gulp-merge-media-queries');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var del = require('del');
var uglify = require('gulp-uglify-es').default;

// TASK FOR HTML
gulp.task('html', function(){
  return gulp.src('./src/html/index.html')
    .pipe(rigger())
    .pipe(gulp.dest('./dist'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

// TASK FOR JS
gulp.task('js', function(){
  return gulp.src('./src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// TASK FOR WATCH
gulp.task('watch', function(){
  gulp.watch('./src/html/**/*.html', ['html']);
  gulp.watch('./src/js/**/*.js', ['js']);
});

// TASK FOR LIVE SERVER
gulp.task('server', function(){
  browserSync.init({
        server: {
            baseDir: "./dist"
        },
        notify: false
    });
});

// DEL TASK
gulp.task('del:dist', function(){
  return del.sync('./dist');
});

// BUILD TASK
gulp.task('build', ['html', 'js']);

// START TASK
gulp.task('start', ['del:dist', 'build', 'server', 'watch']);
