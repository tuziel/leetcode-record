/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  var rows = board.length;
  var cols = board[0].length;
  var len = word.length;
  var traversed = new Array(rows * cols);
  var getIndex = (r, c) => r * cols + c;
  var flag = false;

  function dfs(r, c, deep) {
    var index = getIndex(r, c);
    if (traversed[index]) return;
    traversed[index] = 1;

    if (board[r][c] === word[deep]) {
      deep++;
      if (deep === len) flag = true;
      if (flag) return;

      if (r > 0) dfs(r - 1, c, deep);
      if (c < cols - 1) dfs(r, c + 1, deep);
      if (r < rows - 1) dfs(r + 1, c, deep);
      if (c > 0) dfs(r, c - 1, deep);
    }

    traversed[index] = 0;
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      dfs(i, j, 0);
      if (flag) return true;
    }
  }

  return false;
};

module.exports = exist;
