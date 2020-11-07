/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  var end = A.length - 1;
  if (end < 2) return false;

  var i = 0;
  var j = end;
  while (A[i + 1] - A[i] > 0) i++;
  while (A[j - 1] - A[j] > 0) j--;

  return i > 0 && j < end && i === j;
};

module.exports = validMountainArray;
