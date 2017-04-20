var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

var b = browserify({
  //entries: ['./src/js/background.js', './src/js/page.js'],
  cache: {},
  packageCache: {},
  plugin: [watchify],
  transform: [babelify],
});

b.add('./src/js/background.js');
b.on('update', bundle);
bundle();

function bundle() {
  console.log('bundle..');
  b.bundle().pipe(fs.createWriteStream('output.js'));
}