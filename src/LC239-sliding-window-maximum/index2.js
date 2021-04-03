/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  var deque = [];
  var result = new Array(nums.length - k + 1);
  var left, right, num;

  left = right = 0;
  while (right < k) {
    num = nums[right++];
    while (deque.length && deque[deque.length - 1] < num) deque.pop();
    deque.push(num);
  }
  result[left] = deque[0];

  while (right < nums.length) {
    num = nums[right++];
    if (deque[0] === nums[left++]) deque.shift();
    while (deque.length && deque[deque.length - 1] < num) deque.pop();
    deque.push(num);
    result[left] = deque[0];
  }

  return result;
};

module.exports = maxSlidingWindow;
