/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  return coins.reduce((total, curr) => total + Math.ceil(curr / 2), 0);
};

module.exports = minCount;
