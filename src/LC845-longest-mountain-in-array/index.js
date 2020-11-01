/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
  var len = A.length;
  var max = 0;
  var count = 1;
  var dir = 0;

  for (var i = 1; i < len; i++) {
    var a = A[i - 1];
    var b = A[i];
    if (dir === 1) {
      if (a < b) {
        count++;
      } else if (a > b) {
        count++;
        dir = 2;
      } else {
        dir = 0;
      }
    } else if (dir === 0) {
      if (a < b) {
        count = 2;
        dir = 1;
      } else {
        count = 1;
      }
    } else {
      if (a > b) {
        count++;
      } else if (a < b) {
        count = 2;
        dir = 1;
      } else {
        dir = 0;
      }
    }
    if (dir === 2 && count > max) max = count;
  }

  return max >= 3 ? max : 0;
};

module.exports = longestMountain;
