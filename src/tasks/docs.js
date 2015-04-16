'use strict';

function getDocsTask(options, gulp, mode) {

  function docsTask(doneCallback) {

    var exec = require('child_process').exec;
    var done = false;
    var path = require('path');
    var jsdocPath = path.join(__dirname, '..', '..', 'node_modules', '.bin', 'jsdoc');

    function generateJsdoc() {

      exec(jsdocPath + ' src/ -r -d docs/', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (done) return;
        done = true;
        doneCallback(err);
      });

    }

    if (mode.dev) {
      gulp.watch('src/**/*.js', function() {
        generateJsdoc();
      });
    }

    return generateJsdoc();

  }

  return docsTask;

}

exports.getTask = getDocsTask;
