/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  return !(!s.trim() || isNaN(s));
};

module.exports = isNumber;
