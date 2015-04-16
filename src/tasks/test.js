'use strict';

function getTestTask(options, gulp, mode) {

  function testTask() {

    var jasmine = require('gulp-jasmine');

    function testStream() {
      return gulp.src(options.globs)
        .pipe(jasmine({
          includeStackTrace: mode.dev
        }));
    }

    if (mode.dev) {
      gulp.watch(options.watchGlobs, testStream);
    }

    return testStream();

  }

  return testTask;

}

exports.getTask = getTestTask;
exports.defaultOptions = {
  globs: 'src/**/*Spec.js',
  watchGlobs: 'src/**/*.js'
};
