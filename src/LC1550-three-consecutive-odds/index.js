/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  var len = arr.length;
  var count = 0;

  for (var i = 0; i < len; i++) {
    count = arr[i] % 2 ? count + 1 : 0;
    if (count >= 3) return true;
  }

  return false;
};

module.exports = threeConsecutiveOdds;
