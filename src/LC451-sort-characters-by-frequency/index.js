/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  var map = {};
  var chars = [];

  for (var char of s) {
    if (!map[char]) chars.push(char);
    map[char] = -~map[char];
  }

  var result = [];
  chars.forEach((char) => {
    var index = map[char] - 1;
    if (!result[index]) result[index] = '';
    while (map[char]--) result[index] += char;
  });

  return result.reverse().join('');
};

module.exports = frequencySort;
