/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  return !/01/.test(s);
};

module.exports = checkOnesSegment;
