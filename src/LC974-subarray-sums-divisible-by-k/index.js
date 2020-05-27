/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  // 对 K 求余得到的状态
  var cache = new Array(K).fill(0);
  var index = A.length;
  var sum = 0;

  // 状态 0 从 -1 位置开始
  cache[0]++;
  while (index--) {
    sum += A[index];
    var mod = sum % K;
    // 求数量，不需要记录位置，直接统计相同状态位置的数量
    if (mod >= 0) cache[mod]++;
    else cache[mod + K]++;
  }

  index = K;
  sum = 0;
  // 对每组状态得到的子数组数量求和
  while (index--) sum += (cache[index] * (cache[index] - 1)) >> 1;

  return sum;
};

module.exports = subarraysDivByK;

console.log(subarraysDivByK([1, 1, 1, 1], 5));
