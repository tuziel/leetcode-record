/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 等价于查找第 k 个数字
  var size = nums1.length + nums2.length;
  var k = size >> 1;

  var m1 = findKthInArrays(nums1, nums2, k);
  if (size & 1) return m1;

  // 如果不是奇数个数字，还需要查找第 k - 1 个
  var m2 = findKthInArrays(nums1, nums2, k - 1);
  return (m1 + m2) / 2;
};

// 查找第 k 个数字
function findKthInArrays(nums1, nums2, k) {
  // 查找 nums1 中可能是第 k 个的数字
  var index1 = searchBorderLeft(nums1, (val1, i1) => {
    // 有 i1 + i2 个数字比 val1 小
    var i2 = searchBorderLeft(nums2, (val2) => (val2 >= val1));
    return i1 + i2 >= k;
  });
  // 也可能在 nums2 中
  var index2 = k - index1;

  if (index1 >= nums1.length) return nums2[index2];
  if (index2 >= nums2.length) return nums1[index1];
  return Math.min(nums1[index1], nums2[index2]);
}

/**
 * 查找左边界
 * @template T
 * @param {T[]} arr 要查找的数组
 * @param {(val: T, index: number) => boolean} verifier 校验是否在左边界内的方法
 */
function searchBorderLeft(arr, verifier) {
  var [left, right] = [0, arr.length - 1];
  var res = arr.length;
  while (left <= right) {
    var mid = (left + right) >> 1;
    if (verifier(arr[mid], mid)) {
      // 仍在左边界内，更新结果
      res = mid;
      // 缩小右边界
      right = mid - 1;
    } else {
      // 在左边界外，缩小左边界
      left = mid + 1;
    }
  }
  return res;
}

module.exports = findMedianSortedArrays;

