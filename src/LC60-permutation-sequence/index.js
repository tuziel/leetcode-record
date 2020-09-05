/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  var poor = Array.from({ length: n }, (_, i) => i + 1);
  var res = [];

  var loop = 1;
  for (var i = 2; i < n; i++) loop *= i;

  k--;
  while (k) {
    var t = k / loop >>> 0;
    var m = k % loop;
    res.push(poor.splice(t, 1)[0]);
    loop /= --i;
    k = m;
  }
  res.push(...poor);

  return res.join('');
};

module.exports = getPermutation;
