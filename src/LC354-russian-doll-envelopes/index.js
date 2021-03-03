/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  if (envelopes.length <= 1) return envelopes.length;
  envelopes.sort(([w1, h1], [w2, h2]) => w1 === w2 ? h1 - h2 : w1 - w2);

  // 初始状态为空
  var counts = [[]];

  for (var [biggerW, biggerH] of envelopes) {
    // 标记是否找到了合适的 smaller
    var flag = false;
    // 从大到小遍历能放入 i 个信封的集合
    for (var i = counts.length; i--;) {
      // 从小到大遍历每个 smaller
      for (var [smallerW, smallerH] of counts[i]) {
        // 宽度不满足，跳出循环
        if (smallerW >= biggerW) break;
        // 找到第一个可以放入的 smaller
        if (biggerH > smallerH) {
          // 在 counts[i + 1] 合集中添加 bigger
          (counts[i + 1] || (counts[i + 1] = [])).push([biggerW, biggerH]);
          flag = true;
          break;
        }
      }
      if (flag) break;
    }
    // 没找到合适的 smaller 就放到能放入 0 个信封的集合
    if (!flag) counts[0].push([biggerW, biggerH]);
  }

  // 最大下标 + 1 刚好为 length
  return counts.length;
};

module.exports = maxEnvelopes;
