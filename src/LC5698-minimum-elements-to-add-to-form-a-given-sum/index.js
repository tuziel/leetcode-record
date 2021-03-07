/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  return Math.ceil(Math.abs(goal - nums.reduce((a, b) => a + b)) / limit);
};

module.exports = minElements;
