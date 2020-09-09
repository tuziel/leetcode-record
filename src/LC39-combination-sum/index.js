/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  var len = candidates.length;
  var res = [];
  var stack = [];

  function backtrack(tar, index) {
    if (tar === 0) return res.push(stack.slice());

    var i, j, num, count;
    for (i = index; i < len; i++) {
      num = candidates[i];
      count = tar / num >> 0;
      if (count < 1) break;

      for (j = 1; j <= count; j++) stack.push(num);
      while (--j) {
        backtrack(tar - num * j, i + 1);
        stack.pop();
      }
    }
  }

  backtrack(target, 0);
  return res;
};

module.exports = combinationSum;
