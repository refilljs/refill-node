'use strict';

var zkflow = require('zkflow');
var forEach = require('lodash.foreach');
var defaults = require('lodash.defaults');
var mode = require('./mode');
var getGulp = require('./getGulp');

function init(options, externalGulp) {

  var computedOptions;
  var defaultOptions = {
    'lint-js': {
      task: require('zkflow-task-eslint'),
      eslint: {
        rules: {
          quotes: [2, 'single'],
          semi: [2, 'always'],
          eqeqeq: 2,
          strict: 2,
          'vars-on-top': 2,
          'comma-style': 2,
          indent: [2, 2],
          'linebreak-style': [2, 'unix'],
          'one-var': [2, 'never'],
          'no-trailing-spaces': 2,
          'no-multiple-empty-lines': [2, { 'max': 2, 'maxBOF': 0, 'maxEOF': 0 }],
          camelcase: [2, { properties: 'never' }],
          'comma-spacing': 2,
          'key-spacing': 2,
          'object-curly-spacing': [2, 'always']
        },
        env: {
          'node': true,
          'jasmine': true
        },
        extends: 'eslint:recommended'
      }
    },
    test: {
      task: require('zkflow-task-jasmine')
    },
    ci: {
      task: require('zkflow-task-sequence'),
      sequence: ['lint-js', 'test'],
      mode: {
        watch: false,
        eslintFix: false
      }
    },
    default: {
      task: require('zkflow-task-sequence'),
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

  zkflow(computedOptions, getGulp(externalGulp), mode);

}

module.exports = init;