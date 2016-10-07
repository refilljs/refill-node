# Refill for node

Gulp tasks for node projects powered by [refill](https://github.com/refilljs/refill)

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

[Facebook](https://www.facebook.com/zaklinaczekodu)

Shields
-------

[![npm](https://img.shields.io/npm/v/refill-node.svg?style=flat-square)](https://www.npmjs.com/package/refill-node)
[![npm](https://img.shields.io/npm/l/refill-node.svg?style=flat-square)](https://www.npmjs.com/package/refill-node)
[![npm](https://img.shields.io/npm/dm/refill-node.svg?style=flat-square)](https://www.npmjs.com/package/refill-node)
[![Travis](https://img.shields.io/travis/refilljs/refill-node/master.svg?style=flat-square)](https://travis-ci.org/refilljs/refill-node)<br>
[![bitHound Overall Score](https://www.bithound.io/github/refilljs/refill-node/badges/score.svg)](https://www.bithound.io/github/refilljs/refill-node)
[![bitHound Dependencies](https://www.bithound.io/github/refilljs/refill-node/badges/dependencies.svg)](https://www.bithound.io/github/refilljs/refill-node/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/refilljs/refill-node/badges/devDependencies.svg)](https://www.bithound.io/github/refilljs/refill-node/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/refilljs/refill-node/badges/code.svg)](https://www.bithound.io/github/refilljs/refill-node)<br>
[![GitHub forks](https://img.shields.io/github/forks/refilljs/refill-node.svg?style=flat-square)](https://github.com/refilljs/refill-node)
[![GitHub stars](https://img.shields.io/github/stars/refilljs/refill-node.svg?style=flat-square)](https://github.com/refilljs/refill-node)
[![GitHub watchers](https://img.shields.io/github/watchers/refilljs/refill-node.svg?style=flat-square)](https://github.com/refilljs/refill-node)

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

Changelog
---------

[Changelog at github](https://github.com/refilljs/refill-node/releases)

Sponsors
--------

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)
