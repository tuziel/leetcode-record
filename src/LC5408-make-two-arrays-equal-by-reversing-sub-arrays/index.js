/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  var mapA = {};
  var mapB = {};
  var i;

  for (i = 0; i < target.length; i++) {
    mapA[target[i]] = -~target[i];
    mapB[arr[i]] = -~arr[i];
  }

  for (i in mapA) {
    if (mapA[i] !== mapB[i]) return false;
  }

  return true;
};

module.exports = canBeEqual;
