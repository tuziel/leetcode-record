/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  var len = nums.length;
  for (var step = 1; step <= len; step <<= 1) {
    for (var i = 0; i < len;) {
      var [j, l, r] = [i, 0, 0];
      var left = nums.slice(i, i += step);
      var right = nums.slice(i, i += step);
      while (l < left.length || r < right.length) {
        if (l === left.length) nums[j++] = right[r++];
        else if (r === right.length) nums[j++] = left[l++];
        else nums[j++] = left[l] < right[r] ? left[l++] : right[r++];
      }
    }
  }
  return nums;
};

module.exports = sortArray;
