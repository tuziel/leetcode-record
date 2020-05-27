/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // 记录前缀和
  var cache = { 0: 1 };
  var sum = 0;
  var result = 0;
  var index = nums.length;

  while (index--) {
    sum += nums[index];
    var status = sum - k;
    // 存在对应的前缀和状态，即存在相应的子数组个数
    if (cache[status]) result += cache[status];
    // cache[sum]++
    cache[sum] = -~cache[sum];
  }

  return result;
};

module.exports = subarraySum;
