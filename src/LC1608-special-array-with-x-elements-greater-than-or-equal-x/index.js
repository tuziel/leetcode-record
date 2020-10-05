/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);

  var index = nums.length;
  var result = 0;
  while (nums[--index] >= result + 1) result++;

  if (nums[index] === result) return -1;
  return result || -1;
};

module.exports = specialArray;
