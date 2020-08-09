/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  var len = s.length;
  var nums = s.split('').map(i => +i);
  var res = [];

  var a, b, c, d, i, j, k, l;
  a = 0;
  for (i = 0; i < len - 3; i++) {
    a = a * 10 + nums[i];
    if (a > 255) break;
    b = 0;
    for (j = i + 1; j < len - 2; j++) {
      b = b * 10 + nums[j];
      if (b > 255) break;
      c = 0;
      for (k = j + 1; k < len - 1; k++) {
        c = c * 10 + nums[k];
        if (c > 255) break;
        d = 0;
        for (l = k + 1; l < len;) {
          d = d * 10 + nums[l++];
          if (d > 255) break;
          if (d === 0) break;
        }
        if (d <= 255 && l >= len) res.push(`${a}.${b}.${c}.${d}`);
        if (c === 0) break;
      }
      if (b === 0) break;
    }
    if (a === 0) break;
  }

  return res;
};

module.exports = restoreIpAddresses;
