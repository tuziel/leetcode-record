/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  var len = arr.length;
  var res;

  var min = (a, b) => a < b ? a : b;
  var max = (a, b) => a > b ? a : b;
  var round = (n) => n % 1 <= 0.5 ? Math.floor(n) : Math.ceil(n);

  arr.sort((a, b) => a - b);
  arr[-1] = 0;

  var sum = 0;
  var detla = Infinity;
  var i, j, k, l, m;
  for (i = 0; i < len; i++) {
    j = len - i;
    k = max(min(round((target - sum) / j), arr[i]), arr[i - 1]);
    l = sum + j * k;
    m = l > target ? l - target : target - l;

    if (m < detla) {
      detla = m;
      res = k;
    }

    sum += arr[i];
  }

  return res;
};

module.exports = findBestValue;
