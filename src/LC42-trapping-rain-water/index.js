/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  var len = height.length;
  var stack = [];
  var stackI = [];
  var result = 0;

  var getTop = (stk) => stk[stk.length - 1];

  for (var i = 0; i < len; i++) {
    while (stack.length && getTop(stack) < height[i]) {
      var top = stack.pop();
      stackI.pop();
      if (!stack.length) continue;

      var diff = Math.min(height[i], getTop(stack)) - top;
      var index = i - getTop(stackI) - 1;
      result += diff * index;
    }

    stack.push(height[i]);
    stackI.push(i);
  }

  return result;
};

module.exports = trap;
