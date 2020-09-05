/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function (command, obstacles, x, y) {
  var len = command.length;
  var paths = new Array(len);

  var dx = 0;
  var dy = 0;
  var i, j, k, l, m;

  for (i = 0; i < len; i++) {
    paths[i] = [dx, dy];
    if (command[i] === 'U') dy++;
    else dx++;
  }

  for (i = 0, l = paths.length; i < l; i++) {
    k = (x - paths[i][0]) / dx;
    if (k % 1 === 0 && (y - paths[i][1]) / dy === k) break;
  }
  if (i >= l) return false;

  for (i = 0, l = obstacles.length; i < l; i++) {
    if (obstacles[i][0] > x) continue;
    if (obstacles[i][1] > y) continue;

    for (j = 0, m = paths.length; j < m; j++) {
      k = (obstacles[i][0] - paths[j][0]) / dx;
      if (k % 1 === 0 && (obstacles[i][1] - paths[j][1]) / dy === k) break;
    }
    if (j < m) return false;
  }

  return true;
};

module.exports = robot;
