/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var indexes = {};
  var record = [];

  for (var i = 0, l = nums.length; i < l; i++) {
    var key = nums[i];
    var index = indexes[key];
    if (index !== undefined) {
      record[index][1]++;
    } else {
      indexes[key] = record.length;
      record.push([key, 1]);
    }
  }

  return record.sort((a, b) => b[1] - a[1]).slice(0, k).map((n) => n[0]);
};

module.exports = topKFrequent;
