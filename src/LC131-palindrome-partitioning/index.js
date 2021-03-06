/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  var result = [];
  var stack = [];

  backtrack(0);

  function backtrack(left) {
    if (left === s.length) return result.push(stack.slice());

    for (var right = left; right < s.length; right++) {
      if (isPalindrome(left, right)) {
        stack.push(s.slice(left, right + 1));

        backtrack(right + 1);

        stack.pop();
      }
    }
  }

  function isPalindrome(left, right) {
    while (left < right) {
      if (s[left++] !== s[right--]) return false;
    }

    return true;
  }

  return result;
};

module.exports = partition;
