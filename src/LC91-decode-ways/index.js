/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  var len = s.length;
  var c1 = s[0] !== '0';
  var c2 = 0;

  for (var i = 1; i < len; i++) {
    var n = s[i - 1];
    var m = s[i];
    [c1, c2] = [
      m === '0' ? 0 : c1 + c2,
      n === '1' || (n === '2' && m <= '6') ? c1 : 0,
    ];
  }

  return c1 + c2;
};

module.exports = numDecodings;
