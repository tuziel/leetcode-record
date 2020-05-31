/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  var max = Math.max(...candies) - extraCandies;
  return candies.map(n => n >= max);
};

module.exports = kidsWithCandies;
