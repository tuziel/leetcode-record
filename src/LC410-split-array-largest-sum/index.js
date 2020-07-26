/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  var len = nums.length;
  var left, right, curr, count, sum, i;

  left = right = 0;
  for (i = 0; i < len; i++) {
    // 上界为数组和
    right += nums[i];
    // 下界为最大元素
    if (nums[i] > left) left = nums[i];
  }
  // 下界不可能小于平均数
  left = Math.max(left, Math.ceil(right / m));

  while (left < right) {
    sum = count = 0;
    curr = left + right >>> 1;

    for (i = 0; i < len; i++) {
      sum += nums[i];
      // 当前和是否已经达到分组和
      if (sum >= curr) {
        // 如果和相等，则 num[i] 在当前分组里，反则亦反
        sum = sum === curr ? 0 : nums[i];
        count++;
      }
    }

    // 还有剩下的数，可以再分一组
    if (sum > 0) count++;
    // 阈值过小，分组数超过了 m, 缩短下界
    if (count > m) left = curr + 1;
    else right = curr;
  }

  return left;
};

module.exports = splitArray;
