/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  // return grid.reduce((result, row) => result.map((col) => getNextColumn(row, col)), grid[0].map((_, i) => i));

  // 每个小球出发的位置即为初始状态
  var dp = grid[0].map((_, i) => i);

  for (var row of grid) {
    // 对每一个位置出发的小球求下一个位置
    dp = dp.map((x) => getNextColumn(row, x));
  }

  return dp;
};

/**
 * 获取小球在下一行的位置
 * @param {*} row 当前行的箱子
 * @param {*} x 小球当前位置
 */
function getNextColumn(row, x) {
  if (row[x] === 1 && row[x + 1] === 1) return x + 1;
  if (row[x] === -1 && row[x - 1] === -1) return x - 1;
  return -1;
}

module.exports = findBall;
