'use strict';

function getBeautifyTask(options, gulp, mode) {

  function beautifyTask() {

    var jsbeautifier = require('gulp-jsbeautifier');

    var stream = gulp
      .src(options.globs, {
        base: './'
      })
      .pipe(jsbeautifier({
        mode: mode.jsbeautifierVerifyOnly ? 'VERIFY_ONLY' : 'VERIFY_AND_WRITE',
        logSuccess: false,
        js: {
          indentSize: '2'
        }
      }));

    if (!mode.jsbeautifierVerifyOnly) {
      stream = stream.pipe(gulp.dest(''));
    }

    return stream;

  }

  return beautifyTask;

}

exports.getTask = getBeautifyTask;
exports.defaultOptions = {
  globs: [
    'src/**/*.js',
    'gulpfile.js'
  ]
};
