'use strict';

function getJshintTask(options, gulp, mode) {

  function jshintTask() {

    var jshint = require('gulp-jshint');

    function jshintStream() {

      var stream = gulp
        .src(options.globs)
        .pipe(jshint())
        .pipe(jshint.reporter(require('jshint-stylish')));

      if (true === mode.jshintFailOnError) {
        stream = stream.pipe(jshint.reporter('fail'));
      }

      return stream;

    }

    if (mode.dev) {
      gulp.watch(options.globs, function() {
        jshintStream();
      });
    }

    return jshintStream();

  }

  return jshintTask;

}

exports.getTask = getJshintTask;
exports.defaultOptions = {
  globs: [
    'src/**/*.js',
    'gulpfile.js'
  ]
};
