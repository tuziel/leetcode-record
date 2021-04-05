/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  var res = 0;
  var map = new Map([[0, 1]]);

  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];

    for (var j = lower; j <= upper; j++) {
      // 和为 j 的区间个数
      // per[k] + j = sum
      // 即前缀和为 per[k] 的个数
      var k = sum - j;
      if (map.has(k)) res += map.get(k);
    }

    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
  }

  return res;
};

module.exports = countRangeSum;
