/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  var len = arr.length;
  var record = {};
  var i, n;

  for (i = 0; i < len; i++) {
    n = arr[i];
    record[n] = -~record[n];
  }

  var cache = [];
  for (i = 0; i < len; i++) {
    n = record[arr[i]];
    if (n === 0) continue;
    if (cache[n]) return false;
    cache[n] = 1;
    record[arr[i]] = 0;
  }

  return true;
};

module.exports = uniqueOccurrences;
