/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var a = 0;
  var b = 0;
  for (var n of nums) {
    b = ~a & (b ^ n);
    a = ~b & (a ^ n);
  }
  return b;
};

module.exports = singleNumber;
