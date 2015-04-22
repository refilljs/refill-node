'use strict';

/**
 * gulp-zkflow-nodemodule module
 * @module gulp-zkflow-nodemodule
 */

/**
 * get gulp
 * @private
 * @param externalGulp
 * @return {*}
 */
function getGulp(externalGulp) {

  if (typeof externalGulp === 'undefined') {
    return require('gulp');
  }

  return externalGulp;

}

/**
 * Gulp zkflow nodemodule
 * @alias module:gulp-zkflow-nodemodule
 * @param {object} [options] Options
 * @param {object} [options.webserver] Webserver task options
 * @param {object} [options.webserver.dependencies=[]] Webserver task dependencies
 * @param {gulp} [externalGulp=require('gulp')]
 * a gulp object, which will be used to define tasks.
 * If you see "Task 'taskname' is not in your gulpfile" you probably should put require('gulp') here.
 */
function gulpZkflowNodemodule(options, externalGulp) {

  var gulp = getGulp(externalGulp);
  var mode = {
    jsbeautifierVerifyOnly: false,
    jshintFailOnError: false,
    dev: true
  };
  var loadTasks = require('gulp-zkflow-load-tasks');

  loadTasks(mode, options, gulp, {
    beautify: require('./tasks/beautify'),
    docs: require('./tasks/docs'),
    jshint: require('./tasks/jshint'),
    test: require('./tasks/test'),
    webserver: require('./tasks/webserver'),
    ci: {
      task: require('./tasks/ci'),
      sequence: [
        ['jshint', 'beautify', 'test', 'docs']
      ]
    },
    default: {
      task: require('./tasks/default'),
      sequence: [
        ['jshint', 'test', 'docs'],
        'webserver'
      ]
    }
  });

}

module.exports = gulpZkflowNodemodule;
