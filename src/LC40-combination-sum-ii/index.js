/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  var len = candidates.length;
  var res = [];
  var stack = [];

  function backtrack(tar, index) {
    if (tar === 0) return res.push(stack.slice());

    var num, last;
    for (var i = index; i < len; i++) {
      num = candidates[i];
      if (num === last) continue;
      if (tar < num) break;

      stack.push(num);
      backtrack(tar - num, i + 1);
      stack.pop();

      last = num;
    }
  }

  backtrack(target, 0);
  return res;
};

module.exports = combinationSum2;
