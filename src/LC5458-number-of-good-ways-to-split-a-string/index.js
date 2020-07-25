/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  var len = s.length;
  var recordA = {};
  var recordB = {};
  var diffA = 0;
  var diffB = 0;
  var res = 0;

  var i, char;
  for (i = 0; i < len; i++) {
    char = s[i];
    if (recordA[char]) {
      recordA[char]++;
    } else {
      diffA++;
      recordA[char] = 1;
    }
  }

  while (i--) {
    char = s[i];
    if (--recordA[char] === 0) diffA--;

    if (recordB[char]) {
      recordB[char]++;
    } else {
      diffB++;
      recordB[char] = 1;
    }

    if (diffA === diffB) res++;
  }

  return res;
};

module.exports = numSplits;
