/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  var stack = [];
  for (var t of tokens) {
    switch (t) {
      case '+': stack.push(stack.pop() + stack.pop()); break;
      case '-': stack.push(-stack.pop() + stack.pop()); break;
      case '*': stack.push(stack.pop() * stack.pop()); break;
      case '/': stack.push(1 / stack.pop() * stack.pop() | 0); break;
      default: stack.push(+t);
    }
  }
  return stack.pop();
};

module.exports = evalRPN;
