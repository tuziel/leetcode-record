/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var len = nums.length;
  var i, j, last;
  i = j = 0;

  while (i < len) {
    if (nums[i] !== last) {
      last = nums[i];
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
    i++;
  }

  return j;
};

module.exports = removeDuplicates;
