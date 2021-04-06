/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var base = nums[0];
  var v = target >= base;
  var left = 0;
  var right = nums.length - 1;

  while (left <= right) {
    var mid = (left + right) >> 1;
    var m = nums[mid];
    if (m === target) return mid;

    /**
     * target < m | v | m >= base |
     *      T     | T |     T     | right = mid - 1;
     *      T     | F |     T     | left  = mid + 1;
     *      T     | F |     F     | right = mid - 1;
     *      F     | T |     T     | left  = mid + 1;
     *      F     | T |     F     | right = mid - 1;
     *      F     | F |     F     | left  = mid + 1;
     */
    if ((target < m) ^ v ^ (m >= base)) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
};

module.exports = search;
