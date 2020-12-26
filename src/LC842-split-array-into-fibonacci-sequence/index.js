/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function (S) {
  var nums = [].map.call(S, (n) => parseInt(n));
  var len = S.length;
  var stack = [];

  var flag = false;
  function backtrack(index) {
    if (index === len && stack.length >= 3) flag = true;

    var sum = Math.min(stack.length >= 2 ? stack[stack.length - 1] + stack[stack.length - 2] : Infinity, 2147483647);
    var curr = 0;
    for (var i = index; i < len; i++) {
      curr = curr * 10 + nums[i];
      if (nums[index] === 0 && i > index) return;
      if (curr > sum) break;

      if (stack.length < 2 || curr === sum) stack.push(curr);
      else continue;

      backtrack(i + 1);
      if (flag) return;
      stack.pop();
    }
  }

  backtrack(0);
  return stack;
};

module.exports = splitIntoFibonacci;
