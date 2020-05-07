/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  var arr = [];
  var t = 0;
  var n = 0;
  var sr = [-1, 0, 1, 0];
  var sc = [0, 1, 0, -1];

  for (var i = grid.length; i--;) {
    var temp = grid[i];
    for (var j = temp.length; j--;) {
      if (temp[j] === 1) {
        n++;
      } else if (temp[j] === 2) {
        arr.push([i, j]);
      }
    }
  }

  function bfs([r, c]) {
    for (var i = 4; i--;) {
      var nr = r + sr[i];
      var nc = c + sc[i];
      if ((grid[nr] || [])[nc] === 1) {
        grid[nr][nc] = 2;
        n--;
        arr.push([nr, nc]);
      }
    }
  }

  function traversal() {
    for (var i = arr.length; i--;) {
      var item = arr.shift();
      bfs(item);
    }
    if (arr.length) {
      t++;
      traversal();
    }
  }

  traversal();

  return n === 0 ? t : -1;
};

module.exports = orangesRotting;
