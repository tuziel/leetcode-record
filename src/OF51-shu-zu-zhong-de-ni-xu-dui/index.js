/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  var x = nums.length;
  if (x < 2) return 0;

  var result = 0;
  sort();

  function sort() {
    var s = 1;
    var l, r;

    while (s < x) {
      l = 0;
      r = s;
      while (r + s <= x) {
        merge(l, r, r + s);
        r = (l = r + s) + s;
      }
      if (r < x) merge(l, r, x);
      s = s << 1;
    }
  }

  function merge(l, m, r) {
    var a = [];
    var b = [];
    var i, j, k;

    k = l;
    for (i = 0; i < m - l; i++) a[i] = nums[k++];
    k = m;
    for (i = 0; i < r - m; i++) b[i] = nums[k++];

    i = j = 0;
    a[a.length] = b[b.length] = Infinity;
    for (k = l; k < r; k++) {
      if (a[i] <= b[j]) {
        result += j;
        nums[k] = a[i++];
      } else {
        nums[k] = b[j++];
      }
    }
  }

  return result;
};

module.exports = reversePairs;
