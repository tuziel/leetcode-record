/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  var index = 0;
  var end = 0;
  var max = (a, b) => a > b ? a : b;

  while (index < nums.length - 1) {
    end = max(end, index + nums[index]);
    if (index++ >= end) return false;
  }

  return true;
};

module.exports = canJump;
