/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // 3 ** 19 === 1162261467
  // 1162261467 < 2 ** 31
  return n > 0 && 1162261467 % n === 0;
};

module.exports = isPowerOfThree;
