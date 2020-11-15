/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  var len = S.length;
  var res = '';

  var j = len - 1;
  for (var i = 0; i < len; i++) {
    if (!isLetter(S[i])) {
      res += S[i];
    } else {
      while (!isLetter(S[j])) j--;
      res += S[j--];
    }
  }

  return res;
};

function isLetter(char) {
  return /[A-Za-z]/.test(char);
}

module.exports = reverseOnlyLetters;
