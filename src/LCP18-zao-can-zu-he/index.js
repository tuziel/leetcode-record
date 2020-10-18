/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
var breakfastNumber = function (staple, drinks, x) {
  var res = 0;

  staple.sort((a, b) => a - b);
  drinks.sort((a, b) => a - b);
  var lenS = staple.length;
  var lenD = drinks.length;

  var i = 0;
  var j = lenD - 1;

  while (i < lenS && j >= 0) {
    var s = staple[i++];
    var target = x - s;
    while (j >= 0 && target < drinks[j]) j--;
    res = (res + j + 1) % 1000000007;
  }

  return res;
};

module.exports = breakfastNumber;
