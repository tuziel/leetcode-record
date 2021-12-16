/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let res = 0;
  let state = 0;
  for (let i = s.length; i--;) {
    if (s[i] === ' ') {
      if (state === 0) continue;
      return res;
    }
    state = 1;
    res++;
  }

  return res;
};

module.exports = lengthOfLastWord;
