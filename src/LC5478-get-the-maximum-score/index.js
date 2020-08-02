/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function (nums1, nums2) {
  var i = nums1.length - 1;
  var j = nums2.length - 1;
  var dp1 = 0;
  var dp2 = 0;

  while (i >= 0 && j >= 0) {
    while (nums1[i] > nums2[j]) dp1 += nums1[i--];
    while (nums1[i] < nums2[j]) dp2 += nums2[j--];

    if (nums1[i] === nums2[j]) {
      dp1 = dp2 = Math.max(dp1, dp2) + nums1[i];
      i--;
      j--;
    }
  }

  while (i >= 0) dp1 += nums1[i--];
  while (j >= 0) dp2 += nums2[j--];

  return Math.max(dp1, dp2) % 1000000007;
};

module.exports = maxSum;
