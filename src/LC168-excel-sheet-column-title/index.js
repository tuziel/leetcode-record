/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  var stack = [];
  while (columnNumber) {
    stack.push(String.fromCharCode(65 + (--columnNumber % 26)));
    columnNumber = (columnNumber / 26) | 0;
  }
  return stack.reverse().join('');
};

module.exports = convertToTitle;
