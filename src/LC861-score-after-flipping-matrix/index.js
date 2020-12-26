/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  A.forEach((list) => {
    if (list[0] === 0) list.forEach((n, i) => list[i] = n ^ 1);
  });

  var rows = A.length;
  var cols = A[0].length;
  var base = 1 << (cols - 1);
  var res = 0;
  for (var i = 0; i < cols; i++) {
    var count = 0;
    A.forEach((list) => count += list[i]);
    res += Math.max(count, rows - count) * base;
    base >>= 1;
  }

  return res;
};

module.exports = matrixScore;
