/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var len = digits.length;
  if (!len) return [];

  var dictionary = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  var res = [];
  var cache = [];

  function backtrack(index) {
    if (index >= len) return res.push(cache.join(''));

    var dig = digits[index];
    var chars = dictionary[dig];
    for (var i = 0, l = chars.length; i < l; i++) {
      cache.push(chars[i]);
      backtrack(index + 1);
      cache.pop(chars[i]);
    }
  }

  backtrack(0);
  return res;
};

module.exports = letterCombinations;
