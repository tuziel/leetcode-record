/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  var res = 0;
  var base = 6;
  for (var i = 0; i < n; i++) {
    res += (base += i % 7 === 0 ? -5 : 1);
  }
  return res;
};

module.exports = totalMoney;
