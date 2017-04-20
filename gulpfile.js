const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const gutil = require('gulp-util');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');




var _buildJavascripts = function() {

};

var _buildLess = function() {

};

var _buildLess = function() {

};



gulp.task('watch', function() {
  var _rebuild = function(v, func) {
    var relpath = './' + path.relative(process.cwd(), v.path);
    var start = Date.now();
    func(v);
    gutil.log(
      `Detected change in`,
      `${gutil.colors.cyan(relpath)},`,
      `rebuilt in`,
      gutil.colors.bold(gutil.colors.magenta(`${(Date.now()-start)/1000} sec`))
    );
  };

  // TODO: needs to capture all subdirectories
  var s = watch('src/js/**/*.js', function(v) {
    _rebuild(v, () => {
      gulp.src('src/js/{background,page}.js')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(babel())
        .pipe(browserify({
          debug: true,
          transform: ['babelify'],
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./dev/js'));
    });
  });


  // TODO: needs to capture all subdirectories
  watch('src/less/*.less', function(v) {
    _rebuild(v, () => {
      gulp.src('src/less/*.less')
        .pipe(less())
        //.pipe(minifyCSS())
        .pipe(gulp.dest('./dev/css'));
    });
  });

  return s
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(browserify({
      debug: !gulp.env.production,
      transform: ['babelify'],
    }))
    //.pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./dist/js'));
});


gulp.task('css', function(){
  return gulp.src('client/templates/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('build', [ 'bower', 'css' ]);