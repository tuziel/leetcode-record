/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var set = new Set();
  for (var n of nums) {
    if (set.has(n)) return true;
    set.add(n);
  }
  return false;
};

module.exports = containsDuplicate;
