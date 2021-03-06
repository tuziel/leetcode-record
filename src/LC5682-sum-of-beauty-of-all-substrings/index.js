/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  var res = 0;
  var len = s.length;
  var codes = s.split('').map((char) => char.charCodeAt() - 97);

  for (var left = 0; left < len; left++) {
    var counts = new Array(26).fill(0);
    var max = 0;
    for (var right = left; right < len; right++) {
      var min = max = Math.max(max, ++counts[codes[right]]);
      for (var n of counts) {
        if (n > 0 && n < min) min = n;
      }
      res += max - min;
    }
  }

  return res;
};

module.exports = beautySum;
