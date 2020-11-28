/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  var chars = new Array(26).fill(0);
  [].forEach.call(s, (char) => chars[char.charCodeAt() - 97]++);
  var stacks = [];
  chars.forEach((count, index) => {
    var char = String.fromCharCode(index + 97);
    while (count--) (stacks[count] || (stacks[count] = [])).push(char);
  });
  for (var i = 1, l = stacks.length; i < l; i += 2) stacks[i].reverse();
  return stacks.map((stack) => stack.join('')).join('');
};

module.exports = sortString;
