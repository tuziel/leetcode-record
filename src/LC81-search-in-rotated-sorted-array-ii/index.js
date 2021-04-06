/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  var base = nums[0];
  var v = target >= base;
  var left = 0;
  var right = nums.length - 1;

  while (left <= right) {
    var mid = (left + right) >> 1;
    var m = nums[mid];
    if (m === target) return true;

    if (m === nums[right]) right--;
    else if ((target < m) ^ v ^ (m >= base)) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};

module.exports = search;
