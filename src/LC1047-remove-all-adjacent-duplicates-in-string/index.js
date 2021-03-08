/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  var stack = [];
  for (var char of S) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
};

module.exports = removeDuplicates;
