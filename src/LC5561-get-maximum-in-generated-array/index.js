/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  var nums = [0, 1];
  if (n < 2) return nums[n];
  var max = 0;

  for (var i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      nums[i] = nums[i >> 1];
    } else {
      nums[i] = nums[i >> 1] + nums[(i >> 1) + 1];
    }
    if (nums[i] > max) max = nums[i];
  }

  return max;
};

module.exports = getMaximumGenerated;
