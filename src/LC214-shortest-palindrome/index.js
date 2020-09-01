/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  var chars = s.split('');
  var len = s.length;

  // 字符串将插入空节点处理 abcd -> a_b_c_d
  // 因此 mid 位置就是 len -1
  var mid = len - 1;
  var end = mid * 2;

  // 能否从当前位置找到回文串
  function hasPalindrome(index) {
    var left = index;
    var right = index;
    while (0 <= --left && ++right <= end) {
      if (left % 2) continue;
      if (s[left >> 1] !== s[right >> 1]) return false;
    }
    return true;
  }

  // 本身就是回文串
  if (hasPalindrome(mid)) return s;

  while (mid--) {
    // 当前位置存在回文串，将末尾翻转到头部拼接
    if (hasPalindrome(mid)) {
      return chars.slice(mid + 1).reverse().join('') + s;
    }
  }
};

module.exports = shortestPalindrome;
