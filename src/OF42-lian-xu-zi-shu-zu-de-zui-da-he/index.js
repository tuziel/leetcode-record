/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var max = nums.reduce((a, b) => a > b ? a : b);

  nums.reduce((total, curr) => {
    total += curr;
    if (total < 0) total = 0;
    else if (total > max) max = total;
    return total;
  }, 0);

  return max;
};

module.exports = maxSubArray;
