/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  var len = arr.length;
  if (len < 2) return 0;

  var i, j, k, l1, l2, l3, r1, r2, r3;
  i = j = k = l1 = l2 = l3 = r1 = r2 = r3 = 0;
  var total = 0;

  while (i < len - 1) {
    k = i + 1;
    l2 = l1 = arr[i];
    r2 = r1 = arr[k];
    while (k < len) {
      j = i + 1;
      l3 = l2;
      r3 = r2;
      while (j <= k) {
        if (l3 === r3) total++;
        j++;
        l3 ^= arr[j];
        r3 ^= arr[j];
      }
      k++;
      r2 ^= arr[k];
    }
    i++;
    l1 ^= arr[i];
  }

  return total;
};

module.exports = countTriplets;
