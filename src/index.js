'use strict';

function getGulp(externalGulp) {

  if (typeof externalGulp === 'undefined') {
    return require('gulp');
  }

  return externalGulp;

}

function gulpZkflowNodemodule(options, externalGulp) {

  var gulp = getGulp(externalGulp);
  var mode = {
    jsbeautifierVerifyOnly: false,
    jshintFailOnError: false,
    dev: true
  };

  require('./tasks/jshint')(mode, gulp);
  require('./tasks/beautify')(mode, gulp);
  require('./tasks/default')(mode, gulp);
  require('./tasks/ci')(mode, gulp);
  require('./tasks/test')(mode, gulp);

}

module.exports = gulpZkflowNodemodule;
