/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = new Map();

  for (var i = nums.length; i--;) {
    var n = nums[i];
    // 查表
    if (map.has(n)) return [i, map.get(n)];
    map.set(target - n, i);
  }
};

module.exports = twoSum;
