module.exports = longestValidParentheses;
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var len = s.length;
  if (len < 2) return 0;
  // 连续最大有效长度
  var cache = new Array(len);
  cache[-1] = 0;
  // 左括号位置
  var stack = [];
  var res = 0;
  var i, j;

  for (i = 0; i < len; i++) {
    if (s[i] === '(') {
      stack.push(i);
      cache[i] = 0;
    } else if (stack.length) {
      j = stack.pop() - 1;
      if ((cache[i] = (i - j) + cache[j]) > res) res = cache[i];
    } else {
      cache[i] = 0;
    }
  }

  return res;
};

