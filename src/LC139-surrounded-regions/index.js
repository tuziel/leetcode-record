/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  var rows = board.length;
  if (!rows) return 0;
  var cols = board[0].length;
  if (!cols) return 0;
  var stack = [];

  var i, j;
  var f = () => {
    board[i][j] === 'O' && stack.push([i, j]);
  };
  for (i = 0, j = 0; j < cols; j++) f();
  for (j--, i++; i < rows; i++) f();
  for (i--, j--; j >= 0; j--) f();
  for (j++, i--; i > 0; i--) f();


  while (stack.length) {
    [i, j] = stack.pop();
    if (board[i][j] !== 'O') continue;

    board[i][j] = '$';
    if (i > 0) stack.push([i - 1, j]);
    if (j > 0) stack.push([i, j - 1]);
    if (i < rows - 1) stack.push([i + 1, j]);
    if (j < cols - 1) stack.push([i, j + 1]);
  }

  for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
      board[i][j] = board[i][j] === '$' ? 'O' : 'X';
    }
  }
};

module.exports = solve;
