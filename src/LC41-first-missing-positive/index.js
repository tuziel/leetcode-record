/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  var len = nums.length;
  if (!len) return 1;
  var i, j;

  // 使整个数组变为正数
  for (i = 0; i < len; i++) if (nums[i] <= 0) nums[i] = len + 1;

  for (i = 0; i < len; i++) {
    j = (nums[i] > 0 ? nums[i] : -nums[i]) - 1;
    // 超出空间范围，忽略
    if (j >= len) continue;
    // 使用负数标记这个下标
    if (j >= 0 && nums[j] > 0) nums[j] = -nums[j];
  }

  // 寻找第一个没有被标记的下标
  i = 0;
  while (nums[i++] < 0);
  return i;
};

module.exports = firstMissingPositive;
