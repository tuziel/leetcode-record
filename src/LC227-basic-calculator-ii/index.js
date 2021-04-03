/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  var stack = [];

  for (var i = 0; i < s.length;) {
    var opera = '+';
    var num = 0;

    while (s[i] === ' ') i++;
    if (isNaN(s[i])) opera = s[i++];
    while (s[i] === ' ') i++;
    while (/\d/.test(s[i])) num = num * 10 + +s[i++];

    if (opera === '*') {
      stack.push(stack.pop() * num);
    } else if (opera === '/') {
      stack.push(stack.pop() / num | 0);
    } else {
      stack.push(opera === '+' ? num : -num);
    }
  }

  return stack.reduce((a, b) => a + b);
};

module.exports = calculate;
