/* eslint-disable
    func-names,
    import/no-unresolved,
    no-param-reassign,
    no-restricted-syntax,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS203: Remove `|| {}` from converted for-own loops
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
require('../shoulda.js/shoulda.js');

global.extend = function (hash1, hash2) {
  for (const key of Object.keys(hash2 || {})) {
    hash1[key] = hash2[key];
  }
  return hash1;
};
