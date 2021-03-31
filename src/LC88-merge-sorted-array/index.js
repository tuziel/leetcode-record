/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (var i = (m--) + (n--); i--;) {
    if (n < 0) return;
    else if (m < 0 || nums1[m] < nums2[n]) nums1[i] = nums2[n--];
    else nums1[i] = nums1[m--];
  }
};

module.exports = merge;
