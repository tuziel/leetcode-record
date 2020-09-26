/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  var statusR = new Array(9).fill(0);
  var statusC = new Array(9).fill(0);
  var statusG = new Array(9).fill(0);

  var getVal = (r, c) => +board[r][c] || 0;
  var toGrid = (r, c) => (r / 3 >> 0) * 3 + (c / 3 >> 0);

  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      var val = 1 << getVal(r, c);
      if (val === 1) continue;

      if (statusR[r] & val) return false;
      if (statusC[c] & val) return false;
      if (statusG[toGrid(r, c)] & val) return false;

      statusR[r] |= val;
      statusC[c] |= val;
      statusG[toGrid(r, c)] |= val;
    }
  }

  return true;
};

module.exports = isValidSudoku;
