/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  return l.map((left, i) => isArithmetic(nums.slice(left, r[i] + 1)));
};

function isArithmetic(arr) {
  var len = arr.length;
  if (len < 2) return false;

  arr.sort((a, b) => a - b);
  var d = arr[1] - arr[0];
  for (var i = 2; i < len; i++) {
    if (arr[i] - arr[i - 1] !== d) return false;
  }
  return true;
}

module.exports = checkArithmeticSubarrays;
