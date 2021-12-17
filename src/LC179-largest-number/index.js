/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  return nums
    .map((n) => n.toString())
    .sort((a, b) => a === b ? 0 : (a + b > b + a ? -1 : 1))
    .join('')
    .replace(/^0+(.)/, '$1');
};

module.exports = largestNumber;
