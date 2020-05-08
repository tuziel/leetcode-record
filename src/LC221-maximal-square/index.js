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

  // 表 R 记录该行后面有几个 1
  for (i = rows; max = 0, i--;)
    for (j = cols; j--;)
      rMap[getIndexR(i, j)] = matrix[i][j] === '1' ? ++max : max = 0;

  // 表 C 记录该列后面有几个 1
  for (j = cols; max = 0, j--;)
    for (i = rows; i--;)
      cMap[getIndexC(i, j)] = matrix[i][j] === '1' ? ++max : max = 0;

  max = 0;
  for (i = 0; i < size; i++) {
    // 跳过比记录小的值
    if (rMap[i] <= max) continue;
    m = i;
    n = getIndexC(i % rows, i / rows >> 0);
    // 该位置能得到的最大值
    o = rMap[m] < cMap[n] ? rMap[m] : cMap[n];
    if (o <= max) continue;
    // 计算后面位置，行列后面有几个 1
    j = o - 1;
    while (m++, n++, j > 0) {
      // 如果无法得到最大值
      if (rMap[m] < o || cMap[n] < o) {
        // 获取下一个值
        p = rMap[m] < cMap[n] ? rMap[m] : cMap[n];
        // 因为值小了，所以减少对应的次数
        j -= (o - p);
        o = p;
        if (p <= max) break;
      }
      j--;
    }
    if (o > max) max = o;
  }

  return max * max;
};

module.exports = maximalSquare;
