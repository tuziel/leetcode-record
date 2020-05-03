/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  var traversed = {};
  var getIndex = (x, y) => x * n + y;
  var total = 0;

  function dfs(x, y) {
    if (!(x >= 0 && y >= 0 && x < m && y < n)) return;
    if (traversed[getIndex(x, y)]) return false;
    if (sum(x, y) > k) return false;
    traversed[getIndex(x, y)] = 1;
    total++;

    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x + 1, y);
    dfs(x, y - 1);
  }

  dfs(0, 0);

  return total;
};

function sum(x, y) {
  var s = 0;
  while (x > 0) {
    s += x % 10;
    x = x / 10 >> 0;
  }
  while (y > 0) {
    s += y % 10;
    y = y / 10 >> 0;
  }
  return s;
}

module.exports = movingCount;
