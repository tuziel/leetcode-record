/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  var count5 = 0;
  var count10 = 0;

  var com5 = { 5: 1, 10: -1, 20: -1 };
  var com10 = { 5: 0, 10: 1, 20: -1 };
  for (var n of bills) {
    count5 += com5[n];
    count10 += com10[n];
    if (count10 < 0) {
      count10++;
      count5 -= 2;
    }
    if (count5 < 0) return false;
  }

  return true;
};

module.exports = lemonadeChange;
