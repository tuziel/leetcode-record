/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // return Math.sqrt(x) >> 0;
  var a, b = x;
  while (a !== b) {
    a = b;
    b = (b + x / b) >> 1;
  }
  return a;
};

module.exports = mySqrt;
