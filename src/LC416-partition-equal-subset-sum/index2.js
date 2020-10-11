/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  var len = nums.length;

  var target = nums.reduce((a, b) => a + b) / 2;
  if (target % 1) return false;

  nums.sort((a, b) => a - b);
  var cache = {};

  function backtrack(total, left) {
    if (left >= len) return false;
    var key = `${total},${left}`;
    if (cache[key] !== undefined) return cache[key];

    var last;
    for (var i = left; i < len; i++) {
      if (nums[i] === last) continue;
      last = nums[i];
      var curr = total + last;
      if (curr > target) return cache[key] = false;
      if (curr === target) return true;
      if (backtrack(curr, i + 1)) return true;
    }

    return cache[key] = false;
  }

  return backtrack(0, 0);
};

module.exports = canPartition;
