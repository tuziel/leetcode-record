/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  var i = nums.length;
  var x = 0;
  while (i--) x ^= nums[i];
  return x;
};

module.exports = singleNumber;
