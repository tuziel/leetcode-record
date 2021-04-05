/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
  nums.push(Infinity);
  var res = 0;
  var min = 0;
  var i = 0;

  // 确保 [1, min] 全覆盖
  while (min < n) {
    // (min, num[i]) 区间是否有未覆盖数字
    if (nums[i] - min > 1) {
      // 添加 min + 1 后，使 [min + 1, 2 * min + 1] 全覆盖
      min += min + 1;
      res++;
    } else {
      // 已覆盖 [min + 1, min + nums[i]]
      min += nums[i++];
    }
  }

  return res;
};

module.exports = minPatches;
