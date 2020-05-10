/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
  var c = (n / 25 >> 0);
  var result = f(n);
  while (c--) result += f(n -= 25);
  return result % 1000000007;
};

function f(n) {
  var a = n / 5 >> 0;
  var b = a >> 1;
  var c = b + 1;
  return a & 1 ? (c + 1) * c : c * c;
}

module.exports = waysToChange;
