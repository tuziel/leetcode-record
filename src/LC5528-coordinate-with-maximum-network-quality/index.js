/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {
  var len = towers.length;
  var max = 0;
  var radiusSquare = radius * radius;
  var resX, resY;

  for (var i = 0; i < len; i++) {
    var sum = 0;
    var [x1, y1] = towers[i];
    for (var j = 0; j < len; j++) {
      var [x2, y2, q] = towers[j];
      var disX = Math.abs((x1 - x2));
      if (disX > radius) continue;
      var disY = Math.abs((y1 - y2));
      if (disY > radius) continue;
      var disSquare = disX * disX + disY * disY;
      if (disSquare > radiusSquare) continue;
      sum += Math.floor(q / (1 + Math.sqrt(disSquare)));

      if (sum > max) {
        max = sum;
        [resX, resY] = [x1, y1];
      } else if (sum === max) {
        if (x1 < resX) [resX, resY] = [x1, y1];
        else if (x1 === resX && y1 < resY) [resX, resY] = [x1, y1];
      }
    }
  }

  return [resX, resY];
};

module.exports = bestCoordinate;
