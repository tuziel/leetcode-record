/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  var len = arr.length;
  var stack = [start];
  var index, value, temp;

  while (stack.length) {
    value = arr[index = stack.pop()];
    if (value === 0) return true;
    if (value === -1) continue;
    if ((temp = index + value) < len) stack.push(temp);
    if (0 <= (temp = index - value)) stack.push(temp);
    arr[index] = -1;
  }

  return false;
};

module.exports = canReach;
