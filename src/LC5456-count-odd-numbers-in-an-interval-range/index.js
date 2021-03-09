/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  var diff = high - low + 1;
  return (diff >> 1) + (diff % 2 && low % 2);
};

module.exports = countOdds;
