"use strict";

const babel = require("gulp-babel");
const browserify = require('gulp-browserify');
const deepmerge = require('deepmerge');
const fs = require('fs');
const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const plumber = require('gulp-plumber');
const sourcemaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify');

const gutil = require('gulp-util');


// Configures build sequences for different parts of the extension
module.exports = {
  js: (outdir, for_dev) => {
    for_dev = for_dev || false;

    return () => {
      return gulp.src('src/assets/js/{background,page}.js')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(babel())
        .pipe(browserify({
          debug: for_dev,
          transform: ['babelify'],
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(outdir));
    };
  },

  less: (outdir, for_dev) => {
    for_dev = for_dev || false;

    return () => {
      return gulp.src('src/assets/less/**/*.less')
        .pipe(less())
        //.pipe(minifyCSS())
        .pipe(gulp.dest(outdir));
    };
  },

  manifest: (outdir, for_dev) => {
    for_dev = for_dev || false;

    return () => {
      let out = JSON.parse(fs.readFileSync('./src/manifest/default.json'));

      if(!for_dev) {
        let override = JSON.parse(fs.readFileSync('./src/manifest/dist-override.json'));
        out = merge.all([base, override]);
      } else {
        // Append socket.io client to manifest background scripts
        // TODO: Extension fails if both background.page and background.scripts are defined
        if(out.background.scripts === undefined) {
          out.background.scripts = [];
        }
        out.background.scripts.push('assets/watch/socket.io.js');
        out.background.scripts.push('assets/watch/watch_client.js');
      }

      fs.writeFileSync(path.join(outdir, 'manifest.json'), JSON.stringify(out), 'utf-8');
    };
  },

  assets: (outdir) => {
    return () => {
      return gulp.src('./src/assets/{html,images,icons}/**/*')
        .pipe(gulp.dest(path.join(outdir)));
    };
  },

  locales: (outdir) => {
    return () => {
      return gulp.src('./src/_locales/**/*')
        .pipe(gulp.dest(outdir));
    };
  },

  watchClient: () => {
    gulp.src('./node_modules/socket.io-client/dist/socket.io.js')
      .pipe(gulp.dest('./build/dev/assets/watch'));

    gulp.src('./lib/watch_client.js')
      .pipe(gulp.dest('./build/dev/assets/watch'));
  }
};