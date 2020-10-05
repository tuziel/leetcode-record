/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function (points, angle, location) {
  var PI2 = Math.PI * 2;

  var base = 0;
  var [x0, y0] = location;
  var polarAngles = [];
  var i, j, len;

  for (i = 0, len = points.length; i < len; i++) {
    var [x, y] = points[i];
    var dx = x - x0;
    var dy = y - y0;
    if (dx === 0 && dy === 0) base++;
    else polarAngles.push(Math.atan2(dy, dx));
  }

  polarAngles.sort((a, b) => b - a);

  var ang = Math.PI * angle / 180;
  var max = 0;

  i = j = 0;
  len = polarAngles.length;
  var len2 = len * 2;
  while (i < len) {
    var left = polarAngles[i];
    while (j < len2) {
      var right = polarAngles[j % len];
      var diff = left - right;
      if (diff < 0) diff += PI2;
      if (diff - ang <= 1e-6) j++;
      else break;
    }

    max = Math.max(max, j - i);
    i++;
  }

  return base + Math.min(max, len);
};

module.exports = visiblePoints;
