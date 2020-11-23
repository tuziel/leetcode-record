/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var len = nums.length;
  var i = 0;
  var j = 0;

  for (i = 0; i < len; i++) {
    if (nums[i] === 0) continue;
    nums[j++] = nums[i];
  }

  while (j < len) nums[j++] = 0;
};

module.exports = moveZeroes;
