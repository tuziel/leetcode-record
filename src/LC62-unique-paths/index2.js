/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  return combination(m + n - 2, m - 1);
};

/**
 * 排列
 * @param {number} n 在 n 个不同元素中
 * @param {number} m 取 m 个元素
 */
function permutation(n, m) {
  var res = 1;
  m = n - m;
  while (n > m) res *= n--;
  return res;
}

/**
 * 组合
 * @param {number} n 在 n 个不同元素中
 * @param {number} m 取 m 个元素
 */
function combination(n, m) {
  var res = permutation(n, m);
  while (m > 1) res /= m--;
  return res;
}

module.exports = uniquePaths;
