/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  // 异或最高位为最大差异位
  var xor = m ^ n;
  var i = 0;
  while (xor >>> i) i++;
  // 或运算得到相等范围
  // 去除差异
  return (m | n) >>> i << i;
};

module.exports = rangeBitwiseAnd;
