/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  var weight = {};
  arr.forEach((n) => weight[n] = hammingWeight(n));

  return arr.sort((a, b) => {
    if (weight[a] < weight[b]) return -1;
    if (weight[a] > weight[b]) return 1;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};

var hammingWeight = function (n) {
  var total = 0;
  while (n) {
    total++;
    n &= n - 1;
  }
  return total;
};

module.exports = sortByBits;
