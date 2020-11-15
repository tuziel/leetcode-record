/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  var len = arr2.length;
  var map = [];
  arr2.forEach((n, i) => map[n] = i);
  arr1.forEach((n) => { if (map[n] === undefined) map[n] = len + n; });

  return arr1.sort((a, b) => map[a] - map[b]);
};

module.exports = relativeSortArray;
