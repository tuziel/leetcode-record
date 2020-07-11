/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  var right = nums.length - 1;
  if (right <= 3) return 0;

  nums.sort((a, b) => a - b);

  var a = nums[right] - nums[3];
  var b = nums[right - 1] - nums[2];
  var c = nums[right - 2] - nums[1];
  var d = nums[right - 3] - nums[0];

  return Math.min(a, Math.min(b, Math.min(c, d)));
};

module.exports = minDifference;
