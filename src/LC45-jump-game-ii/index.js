/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  var max = (a, b) => a > b ? a : b;
  var end = nums.length - 1;
  var res = 0;
  var index = 0;
  var right = 0;
  var next = 0;

  /**
   * 可将 nums 按能跳到最远的地方，划分为多个区间
   * 初始区间为 [nums[0]]
   * [4] 3 2 4 1] 0 4 2]
   * 显然，从一个区间跳到下一个区间至少需要跳一次
   */

  // 当前区间包含终点，即上个区间已经可以跳到终点则结束循环
  while (right < end) {
    // 当前区间能跳到的最远值
    next = max(next, index + nums[index]);
    // 到达当前区间结尾，设置下个区间范围
    if (index++ === right) {
      // 判断是否能跳到下一个区间，但是这题没有无法到达终点的样例
      // if (next === right) return -1;
      next = right = next;
      res++;
    }
  }

  return res;
};

module.exports = jump;
