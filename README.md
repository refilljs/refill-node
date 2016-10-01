# Refill for node

Gulp tasks for node projects powered by [refill](https://github.com/refilljs/refill)

[<img alt="Made by Zaklinacze Kodu" src="http://refilljs.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

Shields
-------

[![npm](https://img.shields.io/npm/v/refill-node.svg?style=flat-square)](https://www.npmjs.com/package/refill-node)
[![npm](https://img.shields.io/npm/l/refill-node.svg?style=flat-square)](https://www.npmjs.com/package/refill-node)
[![npm](https://img.shields.io/npm/dm/refill-node.svg?style=flat-square)](https://www.npmjs.com/package/refill-node)<br>
[![Travis](https://img.shields.io/travis/refilljs/refill-node/master.svg?style=flat-square)](https://travis-ci.org/refilljs/refill-node)
[![Code Climate](https://img.shields.io/codeclimate/github/refilljs/refill-node.svg?style=flat-square)](https://codeclimate.com/github/refilljs/refill-node)<br>
[![David](https://img.shields.io/david/refilljs/refill-node.svg?style=flat-square)](https://david-dm.org/refilljs/refill-node)
[![David](https://img.shields.io/david/dev/refilljs/refill-node.svg?style=flat-square)](https://david-dm.org/refilljs/refill-node)<br>
[![GitHub forks](https://img.shields.io/github/forks/refilljs/refill-node.svg?style=flat-square)](https://github.com/refilljs/refill-node)
[![GitHub stars](https://img.shields.io/github/stars/refilljs/refill-node.svg?style=flat-square)](https://github.com/refilljs/refill-node)
[![GitHub followers](https://img.shields.io/github/followers/refilljs.svg?style=flat-square)](https://github.com/refilljs/refill-node)

Quickstart
----------

Just put this code in gulpfile.js

```javaScript
require('refill-node').init();
```

Usage
-----

Make sure you understand [how Refill works](https://github.com/refilljs/refill)

### init

```javaScript
require('refill-node').init(options, gulp);
```

#### gulp

Optional. If you get task not found error you probably should do

```javaScript
require('refill-node').init(options, require('gulp'));
```

#### options

Optional. Default options

```javaScript
{
  'lint-js': {
    task: require('refill-task-eslint'),
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
}
```

### mode

```javaScript
require('refill-node').mode;
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

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)
