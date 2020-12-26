/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  var map = {};
  for (var char of s) map[char] = -~map[char];

  var stack = [];
  var top = () => stack.length ? stack[stack.length - 1] : -Infinity;

  for (char of s) {
    if (stack.includes(char)) {
      map[char]--;
    } else {
      while (top() > char && map[top()] > 1) map[stack.pop()]--;
      stack.push(char);
    }
  }

  return stack.join('');
};

module.exports = removeDuplicateLetters;
