/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  var len = nums.length;
  if (!len) return [];
  var result = [];

  var left = nums[0];
  var right = left;
  for (var i = 1; i <= len; i++) {
    if (right + 1 === nums[i]) {
      right = nums[i];
    } else {
      if (left === right) result.push(`${left}`);
      else result.push(`${left}->${right}`);
      left = right = nums[i];
    }
  }

  return result;
};

module.exports = summaryRanges;
