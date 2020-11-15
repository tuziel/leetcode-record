/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  var sum = 0;
  var max = -Infinity;
  var min = Infinity;
  var dpMax = 0;
  var dpMin = 0;

  A.forEach((n) => {
    sum += n;
    dpMax = Math.max(dpMax + n, n);
    if (dpMax > max) max = dpMax;
    dpMin = Math.min(dpMin + n, n);
    if (dpMin < min) min = dpMin;
  });

  if (sum === min) return max;
  return Math.max(max, sum - min);
};

module.exports = maxSubarraySumCircular;
