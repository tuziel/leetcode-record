/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let [a, b] = [0, 0];

  for (const n of nums) {
    [a, b] = [
      a ^ (n & ~b),
      ~(n ^ a) & (n ^ b),
    ];
  }

  return a;
};

module.exports = singleNumber;
