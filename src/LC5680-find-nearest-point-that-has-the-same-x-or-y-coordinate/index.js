/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  var res = -1;
  var min = Infinity;

  points.forEach(([x1, y1], i) => {
    if (x1 !== x && y1 !== y) return;
    var dis = Math.abs(x1 - x) + Math.abs(y1 - y);
    if (dis < min) {
      min = dis;
      res = i;
    }
  });

  return res;
};

module.exports = nearestValidPoint;
