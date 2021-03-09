/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  var multiplier = [0, 0];
  var len = nums.length;

  for (var i = 0; i < len; i++) {
    if (nums[i] > multiplier[0]) {
      if (nums[i] > multiplier[1]) {
        multiplier[0] = multiplier[1];
        multiplier[1] = nums[i];
      } else {
        multiplier[0] = nums[i];
      }
    }
  }

  return (multiplier[0] - 1) * (multiplier[1] - 1);
};

module.exports = maxProduct;
