/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  var len = A.length;
  m--;
  n--;

  while (len--) {
    var a = m >= 0 ? A[m] : -Infinity;
    var b = n >= 0 ? B[n] : -Infinity;
    if (a < b) A[len] = B[n--];
    else A[len] = A[m--];
  }
};

module.exports = merge;
