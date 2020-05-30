/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  var matcher = n.toString(2).match(/1/g);
  return matcher ? matcher.length : 0;
};

// var hammingWeight = function (n) {
//   return n.toString(2).split('1').length - 1;
// };

module.exports = hammingWeight;
