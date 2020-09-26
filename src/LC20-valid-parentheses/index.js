/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var len = s.length;
  if (len % 2) return false;

  var map = { ')': '(', '}': '{', ']': '[' };
  var stack = [];
  var index = -1;

  while (len--) {
    if (s[len] === map[stack[index]]) index--;
    else stack[++index] = s[len];
  }

  return index === -1;
};

module.exports = isValid;
