/**
 * @param {number[][]} box
 * @return {number}
 */
var pileBox = function (box) {
  box.sort((b1, b2) => b1[2] - b2[2]);
  var len = box.length;
  var heights = box.map((b) => b[2]);

  for (var b = 1; b < len; b++) {
    var bigger = box[b];
    var max = heights[b];
    for (var s = 0; box[s][2] < heights[b]; s++) {
      var smaller = box[s];
      if (smaller[0] < bigger[0] && smaller[1] < bigger[1]) {
        max = Math.max(max, heights[s] + heights[b]);
      }
    }
    heights[b] = max;
  }

  return Math.max(...heights);
};

module.exports = pileBox;
