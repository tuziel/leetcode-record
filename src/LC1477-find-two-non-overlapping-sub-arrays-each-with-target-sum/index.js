/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
  var len = arr.length;
  var status = { 0: -1 };
  var record = [];
  var inList = [];
  var outList = [];
  var i, j, k;
  var res = Infinity;
  var leftMin = Infinity;

  var min = (a, b) => a < b ? a : b;

  j = 0;
  for (i = 0; i < len; i++) {
    j += arr[i];
    k = status[j - target];
    if (k !== undefined) record.push([k + 1, i, i - k]);
    status[j] = i;
  }

  len = record.length;
  for (i = 0; i < len; i++) {
    inList[record[i][0]] = record[i][2];
    outList[record[i][1]] = record[i][2];
  }

  len = arr.length;
  i = 0;
  while (i < len) {
    if (outList[i]) leftMin = min(leftMin, outList[i]);
    i++;
    if (inList[i]) res = min(res, leftMin + inList[i]);
  }

  return res === Infinity ? -1 : res;
};

module.exports = minSumOfLengths;
