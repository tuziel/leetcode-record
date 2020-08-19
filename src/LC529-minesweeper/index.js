/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  var [row, col] = click;
  switch (board[row][col]) {
    case 'E': break;
    case 'M': board[row][col] = 'X';
    // fall through
    default: return board;
  }

  var queue = [click];
  var path = [[-1, 0], [0, 1], [1, 0], [1, 0], [0, -1], [0, -1], [-1, 0], [-1, 0]];

  while (queue.length) {
    [row, col] = queue.pop();

    var count = 0;
    var emptys = [];
    for (var i = 0; i < 8; i++) {
      row += path[i][0];
      col += path[i][1];
      if (!board[row]) continue;
      if (board[row][col] === 'E') emptys.push([row, col]);
      else if (board[row][col] === 'M') count++;
    }

    if (count) {
      board[row + 1][col + 1] = `${count}`;
    } else {
      board[row + 1][col + 1] = 'B';
      queue.push(...emptys);
    }
  }

  return board;
};

module.exports = updateBoard;
