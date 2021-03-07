/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1];
  if (nums1.length > nums2.length * 6) return -1;

  var counts = [0, 0, 0, 0, 0, 0, 0];
  var diff = 0;

  var n;
  for (n of nums1) {
    counts[n]++;
    diff += n;
  }
  for (n of nums2) {
    counts[7 - n]++;
    diff -= n;
  }

  var res = 0;
  var m, c;
  if (diff < 0) {
    for (n = 6; --n;) {
      m = counts[6 - n];
      c = Math.ceil((-diff / n));
      if (c <= m) return res + c;
      diff += m * n;
      res += m;
    }
  } else if (diff > 0) {
    for (n = 6; --n;) {
      m = counts[n + 1];
      c = Math.ceil((diff / n));
      if (c <= m) return res + c;
      diff -= m * n;
      res += m;
    }
  }

  return res;
};

module.exports = minOperations;
