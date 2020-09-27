/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var len = nums.length;
  if (len === 0) return -1;
  var base = nums[0];
  if (target === base) return 0;

  var v = target > base ? 1 : 0;
  var i = len >> 1;
  var step, x;

  while (step !== 0) {
    len = (len >> 1) + (len & 1);
    step = len >> 1;
    x = nums[i];
    if (x < base ^ v) {
      if (target === x) return i;
      else i += target > x ? step : -step;
    } else {
      i += v ? -step : step;
    }
  }

  return -1;
};

module.exports = search;
