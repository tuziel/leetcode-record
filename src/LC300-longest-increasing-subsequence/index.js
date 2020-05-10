/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  var x = nums.length;
  if (x <= 1) return x;
  var p = [nums[0]];
  var l, r, m;
  for (var i = 1; i < x; i++) {
    if (nums[i] > p[r = p.length - 1]) {
      p.push(nums[i]);
    } else {
      l = 0;
      while (l < r) {
        m = l + r >> 1;
        if (nums[i] <= p[m]) r = m;
        else l = m + 1;
      }
      p[l] = nums[i];
    }
  }
  return p.length;
};

module.exports = lengthOfLIS;
