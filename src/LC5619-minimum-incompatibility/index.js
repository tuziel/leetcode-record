/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumIncompatibility = function (nums, k) {
  var len = nums.length;
  if (k === len) return 0;
  var count = len / k;
  nums.sort((a, b) => b - a);

  var min = Infinity;
  var stack = [];
  var cache = new Array(len).fill(0);
  var traversed = {};

  function backtrack(start) {
    var key = parseInt(cache.join(''), 2);
    if (traversed[key] === false) return false;

    if (stack.length === k) {
      var curr = stack.reduce((sum, list) => sum + nums[list[0]] - nums[list[count - 1]], 0);
      if (curr < min) min = curr;
      return true;
    }

    var indexes = select(count, start);
    if (indexes.length === 0) return traversed[key] = false;

    var res = false;

    indexes.forEach((list) => {
      list.forEach((i) => cache[i] = 1);
      stack.push(list);
      if (backtrack(list[0] + 1)) res = true;
      stack.pop();
      list.forEach((i) => cache[i] = 0);
    });

    return traversed[key] = res;
  }

  function select(count, start = 0, selected = {}) {
    var result = [];

    var last;
    for (var i = start; i < len; i++) {
      var curr = nums[i];
      if (cache[i]) continue;
      if (selected[curr]) continue;
      if (curr === last) continue;

      last = curr;
      selected[curr] = 1;
      cache[i] = 1;

      if (count === 1) result.push([i]);
      else result.push(...select(count - 1, i + 1, selected).map((list) => [i, ...list]));

      cache[i] = 0;
      selected[curr] = 0;
    }

    return result;
  }

  backtrack(0);
  return min === Infinity ? -1 : min;
};

module.exports = minimumIncompatibility;
