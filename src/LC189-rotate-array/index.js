/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  while (k >= nums.length) k -= nums.length;

  var left = -1;
  var right = nums.length;
  while (++left < --right) [nums[left], nums[right]] = [nums[right], nums[left]];

  left = -1;
  right = k;
  while (++left < --right) [nums[left], nums[right]] = [nums[right], nums[left]];

  left = k - 1;
  right = nums.length;
  while (++left < --right) [nums[left], nums[right]] = [nums[right], nums[left]];
};

module.exports = rotate;
