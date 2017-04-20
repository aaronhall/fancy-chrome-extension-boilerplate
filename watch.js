"use strict";

var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

var b = browserify({
  //entries: ['./src/js/background.js'],
  cache: {},
  packageCache: {},
  plugin: [watchify],
  //transform: ['babelify'],
  sourceType: 'module',
  debug: true,
});


b.add('./src/js/background.js');
b.transform('babelify');


//b.bundle()

//bundle();
watchify(b).bundle();//.pipe(fs.createWriteStream('output.js'));
//b.on('update', bundle);

function bundle() {
  b.bundle().pipe(fs.createWriteStream('output.js'));
}