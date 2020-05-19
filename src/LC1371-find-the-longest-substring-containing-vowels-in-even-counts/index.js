/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  var len = s.length;
  // 压缩状态到二进制位
  var map = { a: 1, e: 2, i: 4, o: 8, u: 16 };
  // 五个状态位一共 32 种状态
  var record = new Array(32);
  var result = 0;
  var curr = 0;

  var max = (a, b) => a > b ? a : b;

  // 状态 0 的长度从位置 0 的左边开始计算
  // |aeiieax| => |1373100|
  // 其余状态从第一次出现位置的右边开始计算
  // a|eixxie| => 1|377731|
  record[0] = -1;
  for (var i = 0; i < len; i++) {
    // 计算当前状态
    curr ^= map[s[i]];
    // 记录状态第一次出现的位置
    if (record[curr] === void 0) record[curr] = i;
    // 计算两次相同状态之间的最长距离
    else result = max(result, i - record[curr]);
  }

  return result;
};

module.exports = findTheLongestSubstring;
