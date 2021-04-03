/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  var len = 10;
  var res = [];
  var stack = [];

  function backtrack(target, index) {
    if (stack.length === k) {
      if (target === 0) res.push(stack.slice());
      return;
    }

    for (var num = index; num < len; num++) {
      if (target < num) break;

      stack.push(num);
      backtrack(target - num, num + 1);
      stack.pop();
    }
  }

  backtrack(n, 1);
  return res;
};

module.exports = combinationSum3;
