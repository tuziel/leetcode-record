/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  var len = nums.length;
  if (len <= 2) return true;

  var left = 0;
  while (left < len && nums[left] <= nums[++left]);
  if (left === len) return true;

  var right = left + len - 1;
  while (left < right) {
    if (nums[(left) % len] > nums[(++left) % len]) return false;
  }

  return true;
};

module.exports = check;
