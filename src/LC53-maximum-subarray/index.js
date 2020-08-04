/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var len = nums.length;
  var max = -Infinity;
  var sum = 0;

  for (var i = 0; i < len; i++) {
    sum += nums[i];
    if (sum < 0) {
      sum = 0;
      if (nums[i] > max) max = nums[i];
    } else if (sum > max) {
      max = sum;
    }
  }

  return max;
};

module.exports = maxSubArray;
