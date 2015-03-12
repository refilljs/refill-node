'use strict';

function jshintTask(mode, gulp) {

  gulp.task('jshint', function() {

    var jshint = require('gulp-jshint');
    var glob = [
      'src/**/*.js',
      'gulpfile.js'
    ];

    function jshintStream() {

      var stream = gulp
        .src(glob)
        .pipe(jshint())
        .pipe(jshint.reporter(require('jshint-stylish')));

      if (true === mode.jshintFailOnError) {
        stream = stream.pipe(jshint.reporter('fail'));
      }

      return stream;

    }

    if (false === mode.dev) {
      return jshintStream();
    }

    jshintStream();

    gulp.watch(glob, function() {
      jshintStream();
    });

  });

}

module.exports = jshintTask;
