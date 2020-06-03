/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var len = nums.length;
  // 数组中是否有 0
  var flag = 0;
  var total = 1;

  // 求数组积
  for (var index = 0; index < len; index++) {
    // 少于一个 0 时忽略这个 0
    if (nums[index] === 0 && flag === 0) flag = 1;
    else total *= nums[index];
  }

  // 数组不存在 0，求商
  if (flag === 0) while (index--) nums[index] = division(total, nums[index]);
  // 如果数组存在 0，则除了 0 的位置是数组积，其他位置是 0
  else while (index--) nums[index] = nums[index] === 0 ? total : 0;

  return nums;
};

/**
 * 二分法模拟除法
 * @param {*} div 被除数
 * @param {*} src 除数
 */
function division(div, src) {
  // 商是否是正数
  var flag = 1;
  if (div < 0) {
    div = -div;
    flag = !flag;
  }
  if (src < 0) {
    src = -src;
    flag = !flag;
  }

  // 求商的最大值范围
  var left, right, mid, prod;
  right = 1;
  while ((prod = right * src) < div) {
    left = right;
    right <<= 1;
  }

  // 二分查找
  while (left < right) {
    prod = src * (mid = (left + right) >> 1);
    if (prod < div) left = mid + 1;
    else right = mid;
  }

  return flag ? right : -right;
}

module.exports = productExceptSelf;
