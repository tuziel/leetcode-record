/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var len = nums.length;
  var res = new Array(len);
  var total = 1;

  for (var index = 0; index < len; index++) {
    res[index] = total;
    total *= nums[index];
  }

  total = 1;
  while (index--) {
    res[index] *= total;
    total *= nums[index];
  }

  return res;
};

module.exports = productExceptSelf;
