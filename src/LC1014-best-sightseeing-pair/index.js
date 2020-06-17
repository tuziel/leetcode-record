/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  var len = A.length;
  var point = A[0];
  var res = 0;

  var max = (a, b) => a > b ? a : b;

  for (var i = 1; i < len; i++) {
    res = max(res, --point + A[i]);
    point = max(point, A[i]);
  }

  return res;
};

module.exports = maxScoreSightseeingPair;
