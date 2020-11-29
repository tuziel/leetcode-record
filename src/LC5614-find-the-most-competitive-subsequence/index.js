/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
  var count = nums.length - k;
  var stack = [-Infinity];

  for (var n of nums) {
    while (stack[stack.length - 1] > n && count) {
      stack.pop();
      count--;
    }
    stack.push(n);
  }

  while (count--) stack.pop();
  stack.shift();
  return stack;
};

module.exports = mostCompetitive;
