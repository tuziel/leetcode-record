/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  var index = s.length;
  if (index <= 1) return s;

  var numbers = [];
  var letters = [];
  var result = [];

  while (index--) {
    var char = s[index];
    if (char.charCodeAt() <= 57) numbers.push(char);
    else letters.push(char);
  }

  var a = numbers.length;
  var b = letters.length;
  var c = a - b;

  if (c < -1) return '';
  if (c > 1) return '';

  if (c === 1) result.push(numbers[--a]);
  while (a--) result.push(letters[a], numbers[a]);
  if (c === -1) result.push(letters[b - 1]);
  return result.join('');
};

module.exports = reformat;
