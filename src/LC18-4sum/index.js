/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  var len = nums.length;
  var map = {};
  var result = [];
  var stack = [];

  for (var i = 0; i < len; i++) map[nums[i]] = 1;
  nums.sort((a, b) => a - b);
  nSum(4, 0, 0);

  /**
   * @param {number} n 元素数量
   * @param {number} left 数组开始的下标
   * @param {number} total 当前元素和
   */
  function nSum(n, left, total) {
    var curr, last;

    if (n > 1) {
      for (var i = left; i < len - 1; i++) {
        curr = nums[i];
        if (curr === last) continue;
        if (total + curr * n > target) break;

        stack.push(curr);
        nSum(n - 1, i + 1, total + curr);
        stack.pop();
        last = curr;
      }
    } else {
      curr = target - total;
      if (map[curr] && nums[left] <= curr) result.push([...stack, curr]);
    }
  }

  return result;
};

module.exports = fourSum;
