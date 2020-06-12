/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var len = nums.length;
  var res = [];
  if (len < 3) return res;

  nums.sort((a, b) => a - b);

  var left, mid, right, a, b, c, d;
  for (left = 0; left < len - 2; left++) {
    if (nums[left] === a) continue;
    mid = left + 1;
    right = len - 1;
    a = nums[left];
    while (mid < right) {
      b = nums[mid];
      c = nums[right];
      d = a + b + c;
      if (d === 0) res.push([a, b, c]);

      if (d <= 0) while (nums[++mid] === b);
      else if (d > 0) while (nums[--right] === c);
    }
  }

  return res;
};

module.exports = threeSum;
