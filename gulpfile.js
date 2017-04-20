"use strict";

const build = require('./lib/build');
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const watch = require('gulp-watch');


gulp.task('watch', function() {
  let
    s,
    rebuild = function(v, f) {
      let relpath = './' + path.relative(process.cwd(), v.path);
      let start = Date.now();

      f(v);

      // TODO: emit change event on websocket

      gutil.log(
        `Detected change in`,
        `${gutil.colors.cyan(relpath)},`,
        `rebuilt in`,
        gutil.colors.bold(gutil.colors.magenta(`${(Date.now()-start)/1000} sec`))
      );
    },
    defs = [
      // [file glob to watch, build func]
      ['src/assets/js/**/*.js', build.js('./build/dev/assets/js', true)], // js
      ['src/assets/less/**/*.js', build.less('./build/dev/assets/css', true)], // less
    ]
  ;

  for(let def of defs) {
    s = watch(def[0], function(v) {
      rebuild(v, def[1]);
    });
  }

  return s
});

gulp.task('dist', function() {
  let
    start = Date.now(),
    run = (l, f) => {
      gutil.log(` --> ${l}`);
      f();
    }
  ;

  gutil.log("Buildling distribution in ./build/dist");

  run('javascripts', build.js('./build/dist/assets/js', false));
  run('less', build.less('./build/dist/assets/less', false));

  gutil.log("Finished in", gutil.colors.bold(gutil.colors.magenta(`${(Date.now()-start)/1000} sec`)));
});