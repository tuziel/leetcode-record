/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  var len = nums.length;
  var i0 = 0;
  var i1 = 0;

  for (var i = 0; i < len; i++) {
    var curr = nums[i];
    if (curr === 2) continue;
    nums[i] = nums[i1];
    nums[i1++] = 1;
    if (curr === 0) nums[i0++] = 0;
  }
};

module.exports = sortColors;
