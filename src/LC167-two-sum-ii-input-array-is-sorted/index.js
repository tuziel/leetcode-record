/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var len = numbers.length;
  var record = {};
  var n, m;

  for (var i = 0; i < len; i++) {
    n = numbers[i];
    m = target - n;
    if (record[m] !== undefined) return [record[m], i + 1];
    record[n] = i + 1;
  }
};

module.exports = twoSum;
