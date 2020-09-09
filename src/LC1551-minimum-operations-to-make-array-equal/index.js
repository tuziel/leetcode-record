/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  var d = (n + 1) >>> 1;
  var t = n - 1;
  var m = t % 2;

  return (t + m) * d >>> 1;
};

module.exports = minOperations;
