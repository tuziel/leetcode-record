/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var res = [];
  var stack = [];

  function backtrack(deep, start) {
    if (deep >= k) return res.push(stack.slice());

    for (var i = start; i < n; i++) {
      stack.push(i + 1);
      backtrack(deep + 1, i + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);

  return res;
};

module.exports = combine;
