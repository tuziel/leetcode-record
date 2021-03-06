/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  while (n) {
    if (n % 3 === 2) return false;
    n = n / 3 | 0;
  }

  return false;
};

module.exports = checkPowersOfThree;
