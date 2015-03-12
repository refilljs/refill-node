'use strict';

function beautifyTask(mode, gulp) {

  var jsbeautifier = require('gulp-jsbeautifier');

  gulp.task('beautify', function() {

    return gulp
      .src([
        'src/**/*.js',
        'gulpfile.js'
      ], {
        base: './'
      })
      .pipe(jsbeautifier({
        mode: mode.jsbeautifierVerifyOnly ? 'VERIFY_ONLY' : 'VERIFY_AND_WRITE',
        logSuccess: false,
        js: {
          indentSize: '2'
        }
      }))
      .pipe(gulp.dest(''));

  });

}

module.exports = beautifyTask;
