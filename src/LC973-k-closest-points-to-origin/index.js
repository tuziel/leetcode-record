/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  return points.sort(([x1, y1], [x2, y2]) => (x1 * x1 + y1 * y1) - (x2 * x2 + y2 * y2)).slice(0, K);
};

module.exports = kClosest;
