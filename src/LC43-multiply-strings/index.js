/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  var ra = num1.length - 1;
  var rb = num2.length - 1;
  var r = ra + rb;

  var res = new Array(r + 2).fill(0);

  for (var i = ra; i >= 0; i--) {
    for (var j = rb; j >= 0; j--) {
      var k = r - i - j;
      var sum = res[k] + num1[i] * num2[j];
      res[k] = sum % 10;
      res[k + 1] += sum / 10 | 0;
    }
  }

  var index = res.length;
  while (res[--index] === 0);
  res.length = index + 1;
  return res.length ? res.reverse().join('') : '0';
};

module.exports = multiply;
