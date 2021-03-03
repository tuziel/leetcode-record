/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  var len = envelopes.length;
  if (len <= 1) return len;
  envelopes.sort(([w1, h1], [w2, h2]) => w1 === w2 ? h1 - h2 : w1 - w2);

  var counts = new Array(len);

  for (var b = 0; b < len; b++) {
    var [biggerW, biggerH] = envelopes[b];
    var max = 0;
    // 遍历所有的 smaller
    for (var s = 0; s < b; s++) {
      var [smallerW, smallerH] = envelopes[s];
      // 如果可以把 smaller 放入 bigger，更新最大信封数量
      if (biggerW > smallerW && biggerH > smallerH) {
        max = Math.max(max, counts[s]);
      }
    }
    // 加上自己
    counts[b] = max + 1;
  }

  return Math.max(...counts);
};

module.exports = maxEnvelopes;
