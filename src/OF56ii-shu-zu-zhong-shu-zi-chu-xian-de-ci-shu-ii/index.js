/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var bits1, bits2;

  for (var n of nums) {
    bits1 = bits1 ^ n & ~bits2;
    bits2 = bits2 ^ n & ~bits1;
  }

  return bits1;
};

module.exports = singleNumber;
