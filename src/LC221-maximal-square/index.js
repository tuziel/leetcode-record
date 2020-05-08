/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  var rows = matrix.length;
  if (!rows) return 0;
  var cols = matrix[0].length;
  if (!cols) return 0;
  var size = rows * cols;
  var rMap = new Array(size);
  var cMap = new Array(size);
  var getIndexR = (x, y) => y * rows + x;
  var getIndexC = (x, y) => x * cols + y;
  var max, i, j, m, n, o, p;

  for (i = rows; max = 0, i--;)
    for (j = cols; j--;)
      rMap[getIndexR(i, j)] = matrix[i][j] === '1' ? ++max : max = 0;

  for (j = cols; max = 0, j--;)
    for (i = rows; i--;)
      cMap[getIndexC(i, j)] = matrix[i][j] === '1' ? ++max : max = 0;

  max = 0;
  for (i = 0; i < size; i++) {
    if (rMap[i] <= max) continue;
    m = i;
    n = getIndexC(i % rows, i / rows >> 0);
    o = rMap[m] < cMap[n] ? rMap[m] : cMap[n];
    if (o <= max) continue;
    j = o - 1;
    while (m++, n++, j) {
      if (!(rMap[m] >= o && cMap[n] >= o)) {
        p = rMap[m] < cMap[n] ? rMap[m] : cMap[n];
        j -= (o - p);
        o = p;
      }
      j--;
    }
    if (!j && o > max) max = o;
  }

  return max * max;
};

module.exports = maximalSquare;
// 我不知道为什么能得到正确答案……
