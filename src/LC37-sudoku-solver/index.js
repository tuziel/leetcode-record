/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  var statusRow = new Array(9).fill(0);
  var statusCol = new Array(9).fill(0);
  var statusGrid = new Array(9).fill(0);
  var toGrid = (r, c) => (r / 3 >> 0) * 3 + (c / 3 >> 0);
  var toNum = (char) => char === '.' ? 0 : +char;

  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      var val = toNum(board[r][c]);
      if (val) {
        statusRow[r] |= 1 << val;
        statusCol[c] |= 1 << val;
        statusGrid[toGrid(r, c)] |= 1 << val;
      }
    }
  }

  var flag;
  function backtrack(index) {
    if (index > 80) flag = true;
    if (flag) return;

    var col = index % 9;
    var row = (index - col) / 9;
    if (toNum(board[row][col])) return backtrack(index + 1);

    for (var val = 1; val <= 9; val++) {
      var i = 1 << val;
      if (statusRow[row] & i) continue;
      if (statusCol[col] & i) continue;
      if (statusGrid[toGrid(row, col)] & i) continue;

      statusRow[row] |= i;
      statusCol[col] |= i;
      statusGrid[toGrid(row, col)] |= i;
      board[row][col] = `${val}`;

      backtrack(index + 1);
      if (flag) return;

      statusRow[row] ^= i;
      statusCol[col] ^= i;
      statusGrid[toGrid(row, col)] ^= i;
      board[row][col] = '.';
    }
  }

  backtrack(0);
};

module.exports = solveSudoku;
