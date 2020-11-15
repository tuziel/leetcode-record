/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  var len = A.length;
  var i = 0;
  var j = 1;

  while (1) {
    while (i < len && A[i] % 2 === 0) i += 2;
    while (j < len && A[j] % 2 === 1) j += 2;
    if (i >= len) break;
    [A[i], A[j]] = [A[j], A[i]];
  }

  return A;
};

module.exports = sortArrayByParityII;
