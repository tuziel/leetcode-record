/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  // 按字符数量进行排序
  var list = [['a', a], ['b', b], ['c', c]].sort((x, y) => x[1] - y[1]);
  // 数量第三的字符
  var c3 = list[0][0];
  // 第三的字符数量
  var l3 = list[0][1];
  // 数量第二的字符
  var c2 = list[1][0];
  // 第一第二的字符数量差距
  var l2 = list[1][1] - l3;
  // 数量第一的字符
  var c1 = list[2][0];
  // 第二第三的字符数量差距
  var l1 = list[2][1] - l2 - l3;
  var result = '';

  // 如果第一的比其他的多
  while (l1--) {
    // 先拿一个 c1
    result += c1;
    // 如果还是比其他的多
    if (l1) {
      if (l2) {
        // 第二的比第三的多, 同时拿 c1, c2
        l2--;
        result += c1 + c2;
      } else if (l3) {
        // 第二第三一样多, 同时拿 c1, c3, 此时第二会比第三多 1 个字符
        l1--;
        l2++;
        l3--;
        result += c1 + c3;
      } else {
        // 其他的都拿完了，结尾最多只能补一个 c1 字符，结束
        result += c1;
        break;
      }
    }
  }

  // 剩下的字符都能平均分配
  while (l2--) result += c1 + c2;
  while (l3--) result += c1 + c2 + c3;

  return result;
};

module.exports = longestDiverseString;
