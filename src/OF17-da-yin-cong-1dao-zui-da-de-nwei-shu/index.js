/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  var index = Math.pow(10, n) - 1;
  var list = new Array(index);
  while (index--) {
    list[index] = index + 1;
  }
  return list;
};

module.exports = printNumbers;
