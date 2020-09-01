/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  return /^\s*[+-]?(\d+(\.\d*)?|(\.\d+))([Ee][+-]?\d+)?\s*$/.test(s);
};

module.exports = isNumber;
