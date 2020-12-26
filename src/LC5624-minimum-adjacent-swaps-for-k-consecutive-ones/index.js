/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMoves = function (nums, k) {
  var indexes = [];
  nums.forEach((n, i) => n && indexes.push(i));

  var left = k >> 1;
  var right = k - left - 1;
  var base = indexes[left];
  var count = 0;
  for (var i = 0; i < k; i++) count += Math.abs(indexes[i] - base);
  count -= left * (left + 1) / 2;
  count -= right * (right + 1) / 2;

  var res = count;
  var end = indexes.length - right;
  for (i = left + 1; i < end; i++) {
    var distance = indexes[i] - indexes[i - 1];
    count -= indexes[i - 1] - indexes[i - 1 - left];
    count += indexes[i + right] - indexes[i];
    count += (left - right) * distance;
    if (count < res) res = count;
  }

  return res;
};

module.exports = minMoves;
