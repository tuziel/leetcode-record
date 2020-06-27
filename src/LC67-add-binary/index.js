/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var i = a.length;
  var j = b.length;
  var k = i > j ? i : j;
  var bit = 0;
  var flag = 0;
  var res = [];

  while (i--, j--, k--) {
    bit = (+a[i] || 0) + (+b[j] || 0) + flag;
    res.push(bit & 1);
    flag = (bit & 2) >> 1;
  }

  if (flag) res.push(1);

  return res.reverse().join('');
};

module.exports = addBinary;
