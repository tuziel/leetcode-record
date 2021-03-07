/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  var count = 0;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) count++;
    if (count > 1) return false;
  }

  if (count === 0) return true;
  return nums[nums.length - 1] <= nums[0];
};

module.exports = check;
