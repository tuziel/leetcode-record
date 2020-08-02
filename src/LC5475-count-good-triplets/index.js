/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  var len = arr.length;
  var res = 0;

  for (var i = 0; i < len - 2; i++) {
    for (var j = i + 1; j < len - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) <= a) {
        for (var k = j + 1; k < len; k++) {
          if (Math.abs(arr[j] - arr[k]) <= b) {
            if (Math.abs(arr[i] - arr[k]) <= c) res++;
          }
        }
      }
    }
  }

  return res;
};

module.exports = countGoodTriplets;
