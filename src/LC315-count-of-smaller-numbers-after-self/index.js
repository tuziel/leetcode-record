/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  var len = nums.length;
  var res = Array.from({ length: len }, () => 0);
  var coordinate = Array.from({ length: len }, (_, i) => i);

  sort();

  function sort() {
    var step = 1;
    var left, right;

    while (step < len) {
      left = 0;
      right = step;
      while (right + step <= len) {
        merge(left, right, right + step);
        right = (left = right + step) + step;
      }
      if (right < len) merge(left, right, len);
      step = step << 1;
    }
  }

  function merge(left, mid, right) {
    var a = nums.slice(left, mid);
    var ca = coordinate.slice(left, mid);
    var b = nums.slice(mid, right);
    var cb = coordinate.slice(mid, right);
    a[a.length] = b[b.length] = -Infinity;

    var i, j, k;
    var count = right - mid;
    for (i = j = 0, k = left; k < right; k++) {
      if (a[i] <= b[j]) {
        count--;
        nums[k] = b[j];
        coordinate[k] = cb[j++];
      } else {
        res[ca[i]] += count;
        nums[k] = a[i];
        coordinate[k] = ca[i++];
      }
    }
  }

  return res;
};

module.exports = countSmaller;
