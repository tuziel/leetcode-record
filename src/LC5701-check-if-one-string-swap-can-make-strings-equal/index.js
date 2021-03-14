/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  var len = s1.length;
  if (s2.length !== len) return false;

  var s3 = s1.split('').sort().join('');
  var s4 = s2.split('').sort().join('');
  if (s3 !== s4) return false;

  var diffs = 0;
  for (var i = 0; i < len; i++) {
    if (s1[i] !== s2[i]) diffs++;
    if (diffs > 2) return false;
  }

  return true;
};

module.exports = areAlmostEqual;
