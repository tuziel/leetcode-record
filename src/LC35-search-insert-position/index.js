/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var mid;

  if (right < 0) return 0;

  while (left <= right) {
    mid = left + right >> 1;
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return left;
};

module.exports = searchInsert;
