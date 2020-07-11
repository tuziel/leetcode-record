/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  var arr = [];
  var res = 0;

  function dfs(index, total, flag) {
    if (index > n) return;

    if (flag) {
      dfs(index + 1, total + nums[index], 1);
      arr.push(total);
    } else {
      dfs(index + 1, nums[index], 1);
      dfs(index + 1, 0, 0);
    }
  }

  dfs(0, 0, 0);
  arr.sort((a, b) => a - b);
  left--;
  while (left < right) res += arr[left++];

  return res % 1000000007;
};

module.exports = rangeSum;
