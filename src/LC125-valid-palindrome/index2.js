/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  return (s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()) === s.split('').reverse().join('');
};

module.exports = isPalindrome;
