/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var len = nums.length;
  if (len < 3) return len;

  for (var [left, right] = [2, 2]; right < len; right++) {
    if (nums[left - 2] === nums[right]) continue;
    nums[left++] = nums[right];
  }

  return left;
};

module.exports = removeDuplicates;
