/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
  var res = 0;

  var i = target.length;
  var curr = target[i - 1];
  while (i--) {
    if (curr > target[i]) res += curr - target[i];
    curr = target[i];
  }

  return res + curr;
};

module.exports = minNumberOperations;
