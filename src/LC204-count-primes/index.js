/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  var record = new Array(n);
  var sqrt = Math.sqrt(n) | 0;
  var res = 0;

  for (var i = 2; i <= sqrt; i++) {
    if (record[i]) continue;
    for (var j = i, k = n / j; j < k; j++) record[i * j] = 1;
  }

  for (i = 2; i < n; i++) {
    if (!record[i]) res++;
  }

  return res;
};

module.exports = countPrimes;
