'use strict';

function ciTask(mode, gulp) {

  gulp.task('ci', function(done) {

    var runSequence = require('run-sequence').use(gulp);

    mode.dev = false;
    mode.jshintFailOnError = true;
    mode.jsbeautifierVerifyOnly = true;

    runSequence(
      ['jshint', 'beautify'],
      done
    );

  });

}

module.exports = ciTask;
