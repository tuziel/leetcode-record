/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var left = 0;
  var right = numbers.length - 1;
  var sum;

  while (left < right) {
    sum = numbers[left] + numbers[right];
    if (target < sum) right--;
    else if (sum < target) left++;
    else return [left + 1, right + 1];
  }
};

module.exports = twoSum;
