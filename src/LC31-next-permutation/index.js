/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  var len = nums.length;
  if (len < 2) return;

  var i = len - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;

  if (i === -1) {
    nums.reverse();
  } else {
    var j = len - 1;
    while (j > i && nums[i] >= nums[j]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];

    j = len;
    while (++i < --j) [nums[i], nums[j]] = [nums[j], nums[i]];
  }
};

module.exports = nextPermutation;
