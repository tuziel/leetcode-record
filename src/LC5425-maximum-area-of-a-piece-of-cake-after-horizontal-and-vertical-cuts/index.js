/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  var lenH = horizontalCuts.length + 1;
  var lenW = verticalCuts.length + 1;
  horizontalCuts.sort((a, b) => a - b).push(h);
  verticalCuts.sort((a, b) => a - b).push(w);

  var maxH = 1;
  var maxW = 1;
  var i, j, k;

  var max = (a, b) => a > b ? a : b;

  for (i = 0, j = 0; i < lenH; i++) {
    k = horizontalCuts[i] - j;
    maxH = max(maxH, k);
    j = horizontalCuts[i];
  }

  for (i = 0, j = 0; i < lenW; i++) {
    k = verticalCuts[i] - j;
    maxW = max(maxW, k);
    j = verticalCuts[i];
  }

  return maxH * maxW % 1000000007;
};

module.exports = maxArea;
