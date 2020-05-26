/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  var i = nums[0];
  var j = nums[i];

  while (i !== j) {
    i = nums[i];
    j = nums[nums[j]];
  }

  i = 0;

  while (i !== j) {
    i = nums[i];
    j = nums[j];
  }

  return i;
};

module.exports = findDuplicate;
