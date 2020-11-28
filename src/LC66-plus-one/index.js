/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var i = digits.length;

  while (i--) {
    var sum = digits[i] + 1;
    if (sum < 10) {
      digits[i] = sum;
      break;
    } else {
      digits[i] = sum - 10;
    }
  }

  if (i < 0) digits.unshift(1);
  return digits;
};

module.exports = plusOne;
