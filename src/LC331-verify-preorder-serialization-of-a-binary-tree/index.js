/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  var stack = preorder.split(',').reverse();
  if (stack.pop() === '#') return stack.length === 0;

  var count = 2;
  while (stack.length) {
    if (stack.pop() === '#') count--;
    else count++;
    if (count === 0 && stack.length) return false;
  }

  return count === 0;
};

module.exports = isValidSerialization;
