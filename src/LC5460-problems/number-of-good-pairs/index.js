/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  var len = nums.length;
  var record = [];
  var res = 0;
  var i, n;

  for (i = 0; i < len; i++) {
    n = nums[i];
    if (record[n]) record[n]++;
    else record[n] = 1;
  }

  for (i = 0, len = record.length; i < len; i++) {
    if (record[i]) res += sum(record[i]);
  }

  return res;
};

function sum(n) {
  return n * (n - 1) / 2;
}

module.exports = numIdenticalPairs;
