/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  var len = s.length;
  var res = 0;

  var curr, currTimes, lastTimes;
  currTimes = lastTimes = 0;
  for (var i = 0; i < len; i++) {
    if (s[i] === curr) {
      currTimes++;
    } else {
      lastTimes = currTimes;
      currTimes = 1;
    }
    if (currTimes <= lastTimes) res++;
    curr = s[i];
  }

  return res;
};

module.exports = countBinarySubstrings;
