/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var result = [];
  var map = [];

  nums1.forEach((n) => map[n] = 1);
  nums2.forEach((n) => map[n]-- > 0 && result.push(n));

  return result;
};

module.exports = intersection;
