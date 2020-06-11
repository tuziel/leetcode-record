/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  var len = T.length;
  var stack = [];
  var res = new Array(len);
  var i, j;

  var stackTop = () => stack.length ? T[stack[stack.length - 1]] : Infinity;

  for (i = 0; i < len; i++) {
    while (stackTop() < T[i]) {
      j = stack.pop();
      res[j] = i - j;
    }

    stack.push(i);
  }

  while (stack.length) res[stack.pop()] = 0;

  return res;
};

module.exports = dailyTemperatures;
