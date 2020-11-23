/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  var len = nums.length;
  var left = len;
  var right = len;

  var sum = 0;
  while (left && sum + nums[left - 1] <= x) sum += nums[--left];
  if (!left) {
    if (sum === x) return right - left;
    return -1;
  }
  while (sum + nums[right - len] <= x) sum += nums[right++ - len];

  var res = sum === x ? right - left : Infinity;
  while (left < len) {
    sum -= nums[left++];
    while (sum + nums[right - len] <= x) sum += nums[right++ - len];
    if (sum === x) res = Math.min(res, right - left);
  }

  return res === Infinity ? -1 : res;
};

module.exports = minOperations;
