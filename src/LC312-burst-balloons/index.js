/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  nums.unshift(1);
  nums.push(1);
  var len = nums.length;

  var cache = new Array(len * len);

  // left 到 right 区间，不包含 left, right 可取得的最大值
  function f(left, right) {
    if (right - left < 2) return 0;
    var key = left * len + right;
    if (cache[key] !== undefined) return cache[key];

    var max = 0;
    for (var mid = left + 1; mid < right; mid++) {
      var sum = f(left, mid)
        + nums[left] * nums[mid] * nums[right]
        + f(mid, right);
      if (sum > max) max = sum;
    }

    return cache[key] = max;
  }

  return f(0, len - 1);
};

module.exports = maxCoins;
