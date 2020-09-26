/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var i, j;
  i = j = nums.length;
  if (i === 0) return 0;

  while (i--) {
    if (nums[i] === val) {
      j--;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  return j;
};

module.exports = removeElement;
