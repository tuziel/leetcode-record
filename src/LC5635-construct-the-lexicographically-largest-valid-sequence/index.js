/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
  var len = n * 2 - 1;
  // 存放答案
  var result = new Array(len).fill(0);
  // 记录数字是否被使用
  var poor = new Array(n + 1).fill(0);

  // 尝试将数字填入 index 的位置
  function backtrack(index) {
    // 已经填满所有位置，停止递归
    if (index >= len) return true;

    // 这个位置已经填入其他数字，跳到下一个位置
    if (result[index]) return backtrack(index + 1);

    // 从大到小寻找所有可能的数字
    for (var num = n; num > 1; num--) {
      // 已经使用过这个数字，跳过
      if (poor[num]) continue;
      // 距离为 num 的位置已经填入其他数字，跳过
      if (result[index + num]) continue;
      // 距离为 num 的位置超出了答案长度，跳过
      if (index + num >= len) continue;

      // 改变状态
      poor[num] = 1;
      result[index] = num;
      result[index + num] = num;

      // 递归
      if (backtrack(index + 1)) return true;

      // 还原状态
      poor[num] = 0;
      result[index] = 0;
      result[index + num] = 0;
    }

    // 1 只需要填 1 次，单独拿出来判断
    if (!poor[1]) {
      poor[1] = 1;
      result[index] = 1;
      if (backtrack(index + 1)) return true;
      poor[1] = 0;
      result[index] = 0;
    }
  }

  // 从下标 0 为位置开始递归
  backtrack(0);
  return result;
};

module.exports = constructDistancedSequence;
