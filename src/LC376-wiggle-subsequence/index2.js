/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  var up = 1;
  var down = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      up = Math.max(up, down + 1);
    }
    else if (nums[i - 1] > nums[i]) {
      down = Math.max(down, up + 1);
    }
  }
  return Math.max(up, down);
};

module.exports = wiggleMaxLength;
