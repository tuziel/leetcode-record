/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  var postfix = infix2postfix(s);
  var stack = [];

  for (var opera of postfix) {
    if (['+', '-'].includes(opera)) {
      var right = stack.pop();
      var left = stack.pop();
      stack.push(left + right * (opera === '+' ? 1 : -1));
    } else {
      stack.push(opera);
    }
  }

  return stack.pop();
};

function infix2postfix(infix) {
  var postfix = [];
  var stack = [];
  var top = () => stack[stack.length - 1];

  for (var i = 0; i < infix.length; i++) {
    var opera = infix[i];
    if (/[0-9]/.test(opera)) {
      while (/[0-9]/.test(infix[i + 1])) {
        opera = opera * 10 + +infix[++i];
      }
      postfix.push(+opera);
    } else if (['+', '-'].includes(opera)) {
      while (stack.length && top() !== '(') {
        postfix.push(stack.pop());
      }
      if (infix[i - 1] === top()) postfix.push(0);
      stack.push(opera);
    } else if (opera === '(') {
      stack.push('(');
    } else if (opera === ')') {
      while (top() !== '(') {
        postfix.push(stack.pop());
      }
      stack.pop();
    }
  }

  while (stack.length) {
    postfix.push(stack.pop());
  }

  return postfix;
}

module.exports = calculate;
