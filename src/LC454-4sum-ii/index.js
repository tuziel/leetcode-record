/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  var mapAB = new Map();
  for (var a of A) {
    for (var b of B) {
      var tar = -a - b;
      mapAB.set(tar, (mapAB.get(tar) || 0) + 1);
    }
  }

  var res = 0;
  for (var c of C) {
    for (var d of D) {
      var sum = c + d;
      if (mapAB.has(sum)) res += mapAB.get(sum);
    }
  }

  return res;
};

module.exports = fourSumCount;
