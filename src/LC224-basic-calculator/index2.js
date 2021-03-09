/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  var stack = [0];

  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case ' ': break;
      case '+': break;
      case '-': stack.push(s[i]); break;
      case '(': stack.push(0); break;
      default: {
        var n, m;

        if (s[i] === ')') {
          n = stack.pop();
        } else {
          n = +s[i];
          while (/\d/.test(s[i + 1])) {
            n = n * 10 + +s[++i];
          }
        }

        while ((m = stack.pop()) === '-') {
          n = -n;
        }
        stack.push(n + m);
      }
    }
  }

  return stack.pop();
};

module.exports = calculate;
