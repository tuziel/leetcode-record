/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  var max = 1;
  for (var i = 0; i < points.length; i++) {
    var map = new Map();
    var [xa, ya] = points[i];
    for (var j = i + 1; j < points.length; j++) {
      var [xb, yb] = points[j];
      var rate = (ya > yb || (ya === yb && xa > xb))
        ? Math.atan2(ya - yb, xa - xb)
        : Math.atan2(yb - ya, xb - xa);
      var key = rate.toFixed(6);
      if (!map.has(key)) map.set(key, 1);
      var val = map.get(key) + 1;
      if (val > max) max = val;
      map.set(key, val);
    }
  }
  return max;
};

module.exports = maxPoints;
