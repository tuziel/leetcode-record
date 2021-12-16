/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  nums[-1] = nums[n] = -Infinity;

  while (left <= right) {
    const mid = (left + right) >> 1;
    const l12 = nums[mid] > nums[mid - 1];
    const r21 = nums[mid] > nums[mid + 1];
    if (l12 && r21) return mid;
    if (l12) left = mid + 1;
    else right = mid - 1;
  }
};

module.exports = findPeakElement;
