/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  // 3 以内必须切分成 2 段
  if (n <= 3) return n - 1;

  // 4 以后最优为尽量多长度为 3 的段，其次长度为 2 的段
  var quotient = n / 3 >> 0;
  var mod = n % 3;

  if (mod === 0) return Math.pow(3, quotient);
  if (mod === 1) return Math.pow(3, quotient - 1) * 4;
  return Math.pow(3, quotient) * 2;
};

module.exports = cuttingRope;
