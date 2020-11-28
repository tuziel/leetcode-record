/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);

  var max = 0;
  nums.reduce((prev, next) => {
    var diff = next - prev;
    if (diff > max) max = diff;
    return next;
  });

  return max;
};

module.exports = maximumGap;
