/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var purchasePlans = function (nums, target) {
  nums.sort((a, b) => a - b);
  var left = 0;
  var right = nums.length - 1;
  var res = 0;

  for (; left < right; left++) {
    while (left < right && nums[left] + nums[right] > target) {
      right--;
    }
    if (left < right) {
      res = (res + (right - left)) % 1000000007;
    }
  }

  return res;
};

module.exports = purchasePlans;
