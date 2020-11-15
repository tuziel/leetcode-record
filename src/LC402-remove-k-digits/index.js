/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  var chars = num.split('').reverse();
  var stack = [chars.pop()];
  var top = (s) => s[s.length - 1];

  while (k--) {
    if (!stack.length) stack.push(chars.pop());
    while (chars.length && top(stack) <= top(chars)) stack.push(chars.pop());

    if (chars.length) {
      stack.pop();
      if (!stack.length) {
        while (top(chars) === '0') chars.pop();
      }
    } else {
      stack.pop();
    }
  }

  return [...stack, ...chars.reverse()].join('') || '0';
};

module.exports = removeKdigits;
