'use strict';

function defaultTask(mode, gulp) {

  gulp.task('default', function(done) {

    var runSequence = require('run-sequence').use(gulp);

    runSequence(
      'jshint',
      done
    );

  });

}

module.exports = defaultTask;
