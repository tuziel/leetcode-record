/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  var rows = dungeon.length;
  if (!rows) return 0;
  var cols = dungeon[0].length;
  if (!cols) return 0;
  var size = rows * cols;
  var dp = new Array(size);
  var getIndex = (r, c) => r * cols + c;

  var bottom = rows - 1;
  var right = cols - 1;
  dp[getIndex(bottom, right)] = Math.max(1, 1 - dungeon[bottom][right]);

  function f(r, c) {
    var index = getIndex(r, c);
    if (dp[index]) return dp[index];
    var curr;

    if (r === bottom) curr = f(r, c + 1);
    else if (c === right) curr = f(r + 1, c);
    else curr = Math.min(f(r, c + 1), f(r + 1, c));

    return dp[index] = Math.max(1, curr - dungeon[r][c]);
  }

  return f(0, 0);
};

module.exports = calculateMinimumHP;
