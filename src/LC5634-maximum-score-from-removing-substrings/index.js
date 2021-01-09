/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  var flag = x > y;
  var res = 0;

  var stack = [];
  var top = (s) => s[s.length - 1];

  var char, last;
  for (char of s) {
    last = top(stack);
    if (char === 'a') {
      if (!flag && last === 'b') {
        stack.pop();
        res += y;
      } else {
        stack.push(char);
      }
    } else if (char === 'b') {
      if (flag && last === 'a') {
        stack.pop();
        res += x;
      } else {
        stack.push(char);
      }
    } else {
      if (last === 'a' || last === 'b') stack.push(char);
    }
  }

  var stack2 = [];
  for (char of stack) {
    if (char === 'b' && top(stack2) === 'a') {
      stack2.pop();
      res += x;
    } else if (char === 'a' && top(stack2) === 'b') {
      stack2.pop();
      res += y;
    } else {
      stack2.push(char);
    }
  }

  return res;
};

module.exports = maximumGain;
