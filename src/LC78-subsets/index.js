/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  return nums.reduce((res, i) => [...res, ...res.map((list) => [...list, i])], [[]]);
};

module.exports = subsets;
