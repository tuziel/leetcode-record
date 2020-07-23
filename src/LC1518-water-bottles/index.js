/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  var res = numBottles;
  var temp;

  while (numBottles >= numExchange) {
    temp = numBottles % numExchange;
    numBottles = numBottles / numExchange >> 0;
    res += numBottles;
    numBottles += temp;
  }

  return res;
};

module.exports = numWaterBottles;
