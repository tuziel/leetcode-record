/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  var len = arr.length;
  arr.sort((a, b) => a - b);

  var left = len / 20;
  var right = len - left;

  var sum = 0;
  for (var i = left; i < right; i++) sum += arr[i];

  return sum / (right - left);
};

module.exports = trimMean;
