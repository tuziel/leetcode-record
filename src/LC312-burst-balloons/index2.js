/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  nums.unshift(1);
  nums.push(1);

  // dp[left][offset]
  var len = nums.length;
  var dp = new Array(len);
  for (var i = 0; i < len; i++) {
    dp[i] = new Array(len - i).fill(0);
    dp[i][0] = 0;
    if (i < len - 1) dp[i][1] = 0;
    if (i < len - 2) dp[i][2] = nums[i] * nums[i + 1] * nums[i + 2];
  }

  for (var offset = 3; offset < len; offset++) {
    for (var left = 0; left < len - offset; left++) {
      var right = left + offset;
      var max = 0;
      for (var mid = left + 1; mid < right; mid++) {
        var sumL = dp[left][mid - left];
        var sumM = nums[mid] * nums[left] * nums[right];
        var sumR = dp[mid][right - mid];
        max = Math.max(max, sumL + sumM + sumR);
      }
      dp[left][offset] = max;
    }
  }

  return dp[0][len - 1];
};

module.exports = maxCoins;

// [7,9,8,0,7,1,3,5,5,2,3]
