'use strict';

function defaultTask(mode, gulp) {

  gulp.task('default', function(done) {

    var runSequence = require('run-sequence');

    runSequence(
      'jshint',
      done
    );

  });

}

module.exports = defaultTask;
