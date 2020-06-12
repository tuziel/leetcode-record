/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  var sqrt5 = Math.sqrt(5);
  n++;
  return Math.round((Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n)) / sqrt5);
};

module.exports = climbStairs;
