/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function (binary) {
  var len = binary.length;

  var left = 0;
  while (binary[left] === '1') left++;
  if (left === len) return binary;

  for (var i = left; i < len; i++) if (binary[i] === '0') left++;

  var res = '';
  while (--left) res += '1';
  res += '0';
  var right = len - res.length;
  while (right--) res += '1';
  return res;
};

module.exports = maximumBinaryString;
