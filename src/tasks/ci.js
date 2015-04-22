'use strict';

function getCiTask(options, gulp, mode) {

  function ciTask(done) {

    var runSequence = require('run-sequence').use(gulp);

    mode.dev = false;
    mode.jshintFailOnError = true;
    mode.jsbeautifierVerifyOnly = true;

    runSequence.apply(null, options.sequence.concat([done]));

  }

  return ciTask;

}

exports.getTask = getCiTask;
