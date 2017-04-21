"use strict";

const build = require('./lib/build');
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const startWatchServer = require('./lib/watch_server');
const watch = require('gulp-watch');


gulp.task('watch', function() {
  let
    s, // stream to return
    running = new Set([]),
    rerun = new Set([]),
    rebuild = function(k, v, f) {
      if(running.has(k)) {
        rerun.add(k);
        return;
      } else {
        running.add(k);
        rerun.delete(k);
      }

      let
        relpath = './' + path.relative(process.cwd(), v.path),
        start = Date.now(),
        onRebuildDone = () => {
          gutil.log(`Rebuilt in`, gutil.colors.bold(gutil.colors.magenta(`${(Date.now()-start)/1000} sec`)));

          running.delete(k);
          if(rerun.has(k)) {
            rebuild(k, v, f);
          } else {
            server.emit('serverRebuildDone', {});
          }
        }
      ;

      server.emit('serverRebuildStart', {});
      gutil.log(`Detected change in ${gutil.colors.cyan(relpath)}, rebuilding...`);
      let s = f(v);
      if(s && s.on) s.on('end', onRebuildDone);
      else onRebuildDone();
    },
    defs = [
      // [key, file glob to watch, build func]
      ['js', 'src/assets/js/**/*.js', build.js('./build/dev/assets/js', true)], // js
      ['less', 'src/assets/less/**/*.less', build.less('./build/dev/assets/css', true)], // less
      ['manifest', 'src/manifest/*.json', build.manifest('./build/dev', true)], // manifest
      ['assets', 'src/assets/{html,images,icons}/**/*', build.assets('./build/dev/assets')], // other assets
      ['locales', 'src/assets/_locales/**/*', build.locales('./build/dev/_locales')], // locales
    ]
  ;


  // TODO: handle deleted files?

  for(let def of defs) {
    def[2]();
    s = watch(def[1], function(v) {
      rebuild(def[0], v, def[2]);
    });
  }

  // Watch server
  build.watchClient();
  let server = startWatchServer(4321);
  gutil.log("Started watch server on port", 4321);
  server.on('connection', (socket) => {
    gutil.log("Client connected to watch server");
  });
  server.on('clientReloading', (socket) => {
    gutil.log("Extension is reloading...");
  });

  gutil.log("Project built in", gutil.colors.cyan('./build/dev'));
  gutil.log("Watching for changes...");

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

  gutil.log("Buildling distribution in", gutil.colors.cyan('./build/dist'));

  run('javascripts', build.js('./build/dist/assets/js', false));
  run('less', build.less('./build/dist/assets/less', false));

  gutil.log("Finished in", gutil.colors.bold(gutil.colors.magenta(`${(Date.now()-start)/1000} sec`)));
});