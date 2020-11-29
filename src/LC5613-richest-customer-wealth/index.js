/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(...accounts.map((price) => price.reduce((total, next) => total + next)));
};

module.exports = maximumWealth;
