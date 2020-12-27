/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  var res = 0;
  var storage = [];

  var day = 1;
  apples.forEach((n, d) => {
    var life = day + days[d] - 1;
    if (!storage[life]) storage[life] = 0;
    storage[life] += n;
    for (var i = day; i < storage.length; i++) {
      if (storage[i]) {
        storage[i]--;
        res++;
        break;
      }
    }
    day++;
  });

  var len = storage.length;
  for (var i = day; i < len; i++) {
    if (!storage[i]) continue;
    var count = Math.min(i - day + 1, storage[i]);
    res += count;
    day += count;
  }

  return res;
};

module.exports = eatenApples;
