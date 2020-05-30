/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  var total = 0;

  while (n) {
    total++;
    n &= n - 1;
  }

  return total;
};

module.exports = hammingWeight;
