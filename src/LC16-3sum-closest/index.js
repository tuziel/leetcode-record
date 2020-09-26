/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  var len = nums.length;
  var minDiff = Infinity;
  var res;

  nums.sort((a, b) => a - b);

  for (var i = 0; i < len - 2; i++) {
    var l = i + 1;
    var r = len - 1;
    while (l < r) {
      var sum = nums[i] + nums[l] + nums[r];
      var diff = Math.abs(sum - target);

      if (diff < minDiff) {
        minDiff = diff;
        res = sum;
      }

      if (sum < target) l++;
      else r--;
    }
  }

  return res;
};

module.exports = threeSumClosest;
