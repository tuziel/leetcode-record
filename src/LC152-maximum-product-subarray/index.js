/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  var index = nums.length;
  if (index === 1) return nums[0];

  var positive = 0;
  var negative = 0;
  var result = 0;

  var max = (a, b) => a > b ? a : b;

  while (index--) {
    var curr = nums[index];
    if (curr === 0) {
      positive = 0;
      negative = 0;
    }
    if (curr >= 1) {
      if (positive) positive *= curr;
      else positive = curr;
      negative *= curr;
    }
    if (curr <= -1) {
      var temp = positive ? positive * curr : curr;
      positive = negative ? negative * curr : 0;
      negative = temp;
    }
    result = max(result, positive);
  }

  return result;
};

module.exports = maxProduct;
