'use strict';

var refill = require('refill');
var forEach = require('lodash.foreach');
var defaults = require('lodash.defaults');
var mode = require('./mode');
var getGulp = require('./getGulp');

function init(options, externalGulp) {

  var computedOptions;
  var defaultOptions = {
    'lint-js': {
      task: require('refill-task-eslint')
    },
    test: {
      task: require('refill-task-jasmine')
    },
    ci: {
      task: require('refill-task-sequence'),
      sequence: ['lint-js', 'test'],
      mode: {
        watch: false,
        eslintFix: false
      }
    },
    default: {
      task: require('refill-task-sequence'),
      sequence: ['lint-js', 'test'],
      mode: {
        eslintFix: false
      }
    }
  };

  options = options || {};
  computedOptions = defaults({}, defaultOptions, options);

  forEach(computedOptions, function(taskOptions, taskName) {
    computedOptions[taskName] = defaults({}, options[taskName], taskOptions);
  });

  refill(computedOptions, getGulp(externalGulp), mode);

}

module.exports = init;