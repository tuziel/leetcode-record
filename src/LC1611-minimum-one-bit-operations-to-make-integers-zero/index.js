/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function (n) {
  var result = 0;

  while (n) {
    result ^= n;
    n >>= 1;
  }

  return result;
};

module.exports = minimumOneBitOperations;
