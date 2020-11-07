/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  var len = arr.length;
  arr.sort((a, b) => a - b);
  var diff = arr[1] - arr[0];
  for (var i = 1; i < len; i++) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }
  return true;
};

module.exports = canMakeArithmeticProgression;
