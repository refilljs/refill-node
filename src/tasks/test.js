'use strict';

function beautifyTask(mode, gulp) {

  gulp.task('test', function() {

    var jasmine = require('gulp-jasmine');

    function testStream() {
      return gulp.src('src/**/*Spec.js')
        .pipe(jasmine({
          includeStackTrace: mode.dev
        }));
    }

    if (mode.dev) {
      gulp.watch('src/**/*', testStream);
    }

    return testStream();

  });

}

module.exports = beautifyTask;
