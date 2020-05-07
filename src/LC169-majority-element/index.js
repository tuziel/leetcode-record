/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var map = {};
  var half = nums.length / 2 >> 0;
  var count = 0;
  var result;

  for (var i = nums.length; i--;)
    if ((map[nums[i]] = -~map[nums[i]]) > half) return nums[i];

  for (var k in map)
    if (map[k] > count) count = map[result = k];

  return result;
};

module.exports = majorityElement;
