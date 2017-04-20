const fs = require('fs');
const path = require('path');
const gutil = require('gulp-util');
const Transform = require('stream').Transform;
const Vinyl = require('vinyl');



class MyTransform extends Transform {
  constructor(opts) {
    opts = opts || {};
    opts.objectMode = true;
    super(opts);
  }

  _transform(chunk, encoding, callback) {
    gutil.log("CHUNK");
    gutil.log(chunk.path);
    gutil.log(chunk.base);
    gutil.log("CHUNK");

    var json = JSON.parse(fs.readFileSync(chunk.path, 'utf8'));

    if(typeof(json.main) === 'string') {
      json.main = [json.main];
    }

    for(let f of json.main) {
      let p = path.join(path.dirname(chunk.path), f);
      gutil.log(p);

      let v = new Vinyl({
        path: p,
        base: path.dirname(p),
        contents: fs.createReadStream(p),
        /*
        cwd: '/',
        */
      });

      this.push(v);
    }

    callback();
  }
}

var bower = function(opts) {
  return new MyTransform(opts);
}

module.exports = bower;
