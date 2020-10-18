/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  var x = 1;
  var y = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'A') x = 2 * x + y;
    else y = 2 * y + x;
  }

  return x + y;
};

module.exports = calculate;
