/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  var len = nums.length;
  var res = Infinity;
  var sum = 0;
  var start = 0;
  var count = 0;

  for (var i = 0; i < len; i++) {
    sum += nums[i];
    count++;
    while (sum >= s) {
      res = Math.min(res, count--);
      sum -= nums[start++];
    }
  }

  if (res === Infinity) return 0;
  return res;
};

module.exports = minSubArrayLen;
