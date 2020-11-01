/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
var kthSmallestPath = function (destination, k) {
  var [Vs, Hs] = destination;
  var count = Vs + Hs;
  var res = '';

  while (count--) {
    var combs = combination(Hs + Vs - 1, Vs);

    if (combs >= k) {
      res += 'H';
      Hs--;
    } else {
      k -= combs;
      res += 'V';
      Vs--;
    }
  }

  return res;
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

module.exports = kthSmallestPath;
