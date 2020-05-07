/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 添加映射
  var map = {};
  var i;
  for (i = nums.length; i--;) {
    var record = map[nums[i]];
    if (!record) {
      record = map[nums[i]] = [];
    }
    record.push(i);
  }

  for (i = nums.length; i--;) {
    var x = nums[i];

    // 查表
    var y = target - x;
    record = map[y];

    // 有记录
    if (record) {
      if (x === y) {
        if (record.length > 1) {
          return [map[x][0], map[y][1]];
        } else {
          continue;
        }
      } else {
        return [map[x][0], map[y][0]];
      }
    }

    continue;
  }

  return [];
};

module.exports = twoSum;
