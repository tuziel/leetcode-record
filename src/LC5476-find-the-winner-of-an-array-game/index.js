/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  var len = arr.length;
  var res = arr[0];
  var times = 0;

  for (var i = 1; i < len; i++) {
    if (res < arr[i]) {
      res = arr[i];
      times = 1;
    } else {
      times++;
    }

    if (times >= k) return res;
  }

  return res;
};

module.exports = getWinner;
