/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  var rows = matrix.length;
  var cols = matrix[0].length;

  var r, c, fr, fc;

  for (r = 0; r < rows; r++) {
    if (matrix[r][0] === 0) {
      fc = 1;
      break;
    }
  }

  for (c = 0; c < cols; c++) {
    if (matrix[0][c] === 0) {
      fr = 1;
      break;
    }
  }

  for (r = 1; r < rows; r++) {
    for (c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        matrix[r][0] = 0;
        break;
      }
    }
  }

  for (c = 1; c < cols; c++) {
    for (r = 0; r < rows; r++) {
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0;
        break;
      }
    }
  }

  for (r = 1; r < rows; r++) {
    if (matrix[r][0] !== 0) continue;
    for (c = 0; c < cols; c++) {
      matrix[r][c] = 0;
    }
  }

  for (c = 1; c < cols; c++) {
    if (matrix[0][c] !== 0) continue;
    for (r = 0; r < rows; r++) {
      matrix[r][c] = 0;
    }
  }

  if (fr) {
    for (c = 0; c < cols; c++) {
      matrix[0][c] = 0;
    }
  }

  if (fc) {
    for (r = 0; r < rows; r++) {
      matrix[r][0] = 0;
    }
  }
};

module.exports = setZeroes;
