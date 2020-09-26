/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  var end = nums.length - 1;
  var left = searchL(nums, target, 0, end);
  var right = searchR(nums, target, 0, end);
  return [
    nums[left] === target ? left : -1,
    nums[right] === target ? right : -1,
  ];
};

function searchL(list, target, left, right) {
  while (left < right) {
    var mid = (left + right) >> 1;
    if (target <= list[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return list[left] < target ? left + 1 : left;
}

function searchR(list, target, left, right) {
  while (left < right) {
    var mid = Math.ceil(left + right);
    if (target >= list[mid]) left = mid + 1;
    else right = mid - 1;
  }

  return target < list[right] ? right - 1 : right;
}

module.exports = searchRange;
