# ZKflow for node

Gulp tasks for node projects powered by [ZKflow](https://github.com/zaklinaczekodu/zkflow)

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

Shields
-------

[![npm](https://img.shields.io/npm/v/zkflow-node.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-node)
[![npm](https://img.shields.io/npm/l/zkflow-node.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-node)
[![npm](https://img.shields.io/npm/dm/zkflow-node.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-node)<br>
[![Travis](https://img.shields.io/travis/zaklinaczekodu/zkflow-node/master.svg?style=flat-square)](https://travis-ci.org/zaklinaczekodu/zkflow-node)
[![Code Climate](https://img.shields.io/codeclimate/github/zaklinaczekodu/zkflow-node.svg?style=flat-square)](https://codeclimate.com/github/zaklinaczekodu/zkflow-node)<br>
[![David](https://img.shields.io/david/zaklinaczekodu/zkflow-node.svg?style=flat-square)](https://david-dm.org/zaklinaczekodu/zkflow-node)
[![David](https://img.shields.io/david/dev/zaklinaczekodu/zkflow-node.svg?style=flat-square)](https://david-dm.org/zaklinaczekodu/zkflow-node)<br>
[![GitHub forks](https://img.shields.io/github/forks/zaklinaczekodu/zkflow-node.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-node)
[![GitHub stars](https://img.shields.io/github/stars/zaklinaczekodu/zkflow-node.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-node)
[![GitHub followers](https://img.shields.io/github/followers/zaklinaczekodu.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-node)

Quickstart
----------

Just put this code in gulpfile.js

```javaScript
require('zkflow-node').init();
```

Usage
-----

Make sure you understand [how ZKflow works](https://github.com/zaklinaczekodu/zkflow)

### init

```javaScript
require('zkflow-node').init(options, gulp);
```

#### gulp

Optional. If you get task not found error you probably should do

```javaScript
require('zkflow-node').init(options, require('gulp'));
```

#### options

Optional. Default options

```javaScript
{
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
}
```

### mode

```javaScript
require('zkflow-node').mode;
```

Default mode

```javaScript
{
  watch: true,
  eslintFix: true
}
```

Sponsors
--------

[<img alt="Street Team" src="http://zaklinaczekodu.com/_assets/streetteam.svg" width="200">](http://getstreetteam.com)

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)
