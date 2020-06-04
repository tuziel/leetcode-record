/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var top = 0;
  var left = 0;
  var bottom = matrix.length - 1;
  if (bottom === -1) return [];
  var right = matrix[0].length - 1;
  if (right === -1) return [];

  var res = [matrix[0][0]];
  var row = 0;
  var col = 0;
  var cache;
  while (1) {
    // 右
    cache = matrix[row];
    while (col < right) res.push(cache[++col]);
    if (++top > bottom) break;
    // 下
    while (row < bottom) res.push(matrix[++row][col]);
    if (left > --right) break;
    // 左
    cache = matrix[row];
    while (left < col) res.push(cache[--col]);
    if (top > --bottom) break;
    // 上
    while (top < row) res.push(matrix[--row][col]);
    if (++left > right) break;
  }

  return res;
};

module.exports = spiralOrder;
