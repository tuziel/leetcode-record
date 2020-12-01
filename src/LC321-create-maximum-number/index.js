/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
  var len1 = nums1.length;
  var len2 = nums2.length;
  var start = Math.max(0, k - len2);
  var end = Math.min(k, len1);
  var result = [-Infinity];

  for (var i = start; i <= end; i++) {
    var max1 = getMaxNumber(nums1, i);
    var max2 = getMaxNumber(nums2, k - i);
    var list = merge(max1, max2);
    if (compare(result, list) > 0) result = list;
  }

  return result;
};

function getMaxNumber(nums, k) {
  var count = nums.length - k;
  var stack = [];

  for (var n of nums) {
    while (stack.length && stack[stack.length - 1] < n && count) {
      stack.pop();
      count--;
    }
    stack.push(n);
  }

  while (count--) stack.pop();
  return stack;
}

function merge(nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;
  var result = [];
  var i = 0;
  var j = 0;

  while (i < len1 || j < len2) {
    var a = i < len1 ? nums1[i] : -Infinity;
    var b = j < len2 ? nums2[j] : -Infinity;

    if (a > b) {
      result.push(nums1[i++]);
    } else if (a < b) {
      result.push(nums2[j++]);
    } else {
      if (compare(nums1.slice(i), nums2.slice(j)) <= 0) result.push(nums1[i++]);
      else result.push(nums2[j++]);
    }
  }

  return result;
}

function compare(nums1, nums2) {
  var len = Math.min(nums1.length, nums2.length);
  for (var i = 0; i < len; i++) {
    if (nums1[i] === nums2[i]) continue;
    return nums2[i] - nums1[i];
  }
  return nums2.length - nums1.length;
}

module.exports = maxNumber;
