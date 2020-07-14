/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var map = {};
  var res = [];

  var n;
  var i = nums1.length;
  while (i--) {
    n = nums1[i];
    map[n] = -~map[n];
  }

  i = nums2.length;
  while (i--) {
    n = nums2[i];
    if (map[n]) {
      res.push(n);
      map[n]--;
    }
  }

  return res;
};

module.exports = intersect;
