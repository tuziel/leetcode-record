/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  var len = nums.length;
  var lasts = [];
  var lengths = [];

  for (var i = 0; i < len;) {
    var curr = nums[i];
    var count = 1;
    while (nums[++i] === curr) count++;

    var index = lasts.length - 1;
    while (count) {
      if (index < 0) break;
      if (curr - lasts[index] > 1) {
        if (lengths[index] < 3) return false;
        break;
      }
      lasts[index] = curr;
      lengths[index--]++;
      count--;
    }

    index = lasts.length;
    while (count--) {
      lasts[index] = curr;
      lengths[index++] = 1;
    }
  }

  return lengths.every((len) => len >= 3);
};

module.exports = isPossible;
