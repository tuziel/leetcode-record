/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  var len = nums.length;
  var record = [];
  var max = 0;
  var i, n;

  for (i = 0; i < len; i++) {
    n = nums[i];
    if (n > max) max = n;
    record[n] = -~record[n];
  }

  var total = 0;
  for (i = 0; i <= max; i++) {
    if (!record[i]) continue;
    [record[i], total] = [total, total + record[i]];
  }

  return nums.map((n) => record[n]);
};

module.exports = smallerNumbersThanCurrent;
