/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  var map = {};
  var res = 0;

  nums.forEach((n) => {
    if (map[n]) {
      map[n]--;
      res++;
    } else {
      map[k - n] = -~map[k - n];
    }
  });

  return res;
};

module.exports = maxOperations;
