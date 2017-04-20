"use strict";

const babel = require("gulp-babel");
const browserify = require('gulp-browserify');
const deepmerge = require('deepmerge');
const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const plumber = require('gulp-plumber');
const sourcemaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify');


// Configures build sequences for different parts of the extension
module.exports = {
  js: (outdir, for_dev) => {
    let for_dev = for_dev || false;

    return () => {
      return gulp.src('src/assets/js/{background,page}.js')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(babel())
        .pipe(browserify({
          debug: dev,
          transform: ['babelify'],
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(outdir));
    };
  },

  less: (outdir, for_dev) => {
    let for_dev = for_dev || false;

    return () => {
      return gulp.src('src/assets/less/**/*.less')
        .pipe(less())
        //.pipe(minifyCSS())
        .pipe(gulp.dest(outdir));
    };
  },

  manifest: (outdir) => {
    return () => {
      let default = JSON.parse(fs.createReadStream('./src/manifest/default.json'));
      let override = JSON.parse(fs.createReadStream('./src/manifest/dist-override.json'));

      let out = merge.all([default, override]);

      fs.writeFile(path.join(outdir, 'manifest.json'), JSON.stringify(out) , 'utf-8');
    };
  },

  assets: (outdir) => {
    // html, images, icons
    return () => {

    };
  },
};