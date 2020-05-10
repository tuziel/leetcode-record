/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  var len = arr.length;
  if (len < 2) return 0;

  var i, j, k, l1, l2, r1, r2;
  i = j = k = l1 = l2 = r1 = r2 = 0;
  var total = 0;

  while (i < len - 1) {
    k = i + 1;
    l1 = arr[i];
    r1 = arr[k];
    while (k < len) {
      j = i + 1;
      l2 = l1;
      r2 = r1;
      while (j <= k) {
        if (l2 === r2) total++;
        j++;
        l2 ^= arr[j];
        r2 ^= arr[j];
      }
      k++;
      r1 ^= arr[k];
    }
    i++;
    l1 ^= arr[i];
  }

  return total;
};

module.exports = countTriplets;
