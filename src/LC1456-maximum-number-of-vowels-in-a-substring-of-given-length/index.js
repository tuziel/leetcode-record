/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  var len = s.length;
  var curr = 0;
  var res = 0;
  var left = 0;
  var right = 0;

  var max = (a, b) => a > b ? a : b;
  var isVowel = (c) => ({ a: 1, e: 1, i: 1, o: 1, u: 1 })[c];

  while (right < k) {
    if (isVowel(s[right++])) curr++;
  }
  res = curr;

  while (right < len) {
    if (isVowel(s[left++])) curr--;
    if (isVowel(s[right++])) curr++;
    res = max(res, curr);
  }

  return res;
};

module.exports = maxVowels;
