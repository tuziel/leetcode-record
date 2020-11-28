/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  var len = nums.length;
  var res = 0;

  var step = 1;
  var left, mid, right;

  while (step < len) {
    left = 0;
    mid = step;
    while (mid <= len) {
      right = Math.min(mid + step, len);

      var a = nums.slice(left, mid);
      var b = nums.slice(mid, right);
      a[a.length] = b[b.length] = -Infinity;

      var i, j, k;
      var count = right - mid;
      for (i = j = 0, k = left; k < right; k++) {
        if (a[i] > 2 * b[j]) {
          i++;
          res += count;
        } else {
          j++;
          count--;
        }
      }
      for (i = j = 0, k = left; k < right; k++) {
        if (a[i] <= b[j]) {
          nums[k] = b[j++];
        } else {
          nums[k] = a[i++];
        }
      }

      mid = (left = right) + step;
    }
    step = step << 1;
  }

  return res;
};

module.exports = reversePairs;
