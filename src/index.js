'use strict';

function gulpZkflowNodemodule() {

  var gulp = require('gulp');
  var mode = {
    jsbeautifierVerifyOnly: false,
    jshintFailOnError: false,
    dev: true
  };

  require('./tasks/jshint')(mode, gulp);
  require('./tasks/beautify')(mode, gulp);
  require('./tasks/default')(mode, gulp);
  require('./tasks/ci')(mode, gulp);

}

module.exports = gulpZkflowNodemodule;
