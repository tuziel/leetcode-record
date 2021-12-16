/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  var left = 0;
  var right = nums.length - 1;
  var min = nums[0];

  while (left <= right) {
    var mid = (left + right) >> 1;

    if (nums[mid] < min) {
      right = mid - 1;
      min = nums[mid];
    } else if (nums[mid] === nums[right]) {
      right--;
    } else {
      left = mid + 1;
    }
  }

  return min;
};

module.exports = findMin;
