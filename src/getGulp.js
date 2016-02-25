'use strict';

/**
 * get gulp
 * @param externalGulp
 * @return {*}
 */
function getGulp(externalGulp) {

  if (typeof externalGulp === 'undefined') {
    return require('gulp');
  }

  return externalGulp;

}

module.exports = getGulp;