/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  var map = {};
  var res = 0;

  nums.forEach((n) => map[n] = 1);
  for (var n of nums) {
    if (map[n] !== 1) continue;
    for (var m = n + 1; map[m]; m++) {
      map[n] += map[m];
      map[m] = 0;
    }
    if (map[n] > res) res = map[n];
  }

  return res;
};

module.exports = longestConsecutive;
