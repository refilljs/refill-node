'use strict';

function getDefaultTask(options, gulp) {

  function defaultTask(done) {

    var runSequence = require('run-sequence').use(gulp);

    runSequence.apply(null, options.sequence.concat([done]));

  }

  return defaultTask;

}

exports.getTask = getDefaultTask;
