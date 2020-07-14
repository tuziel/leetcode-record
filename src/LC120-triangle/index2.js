/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  return triangle.reduceRight((dp, curr) => curr.map((n, i) => n + Math.min(dp[i], dp[i + 1])))[0];
};

module.exports = minimumTotal;
