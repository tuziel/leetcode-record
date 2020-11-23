/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  var queue = [[r0, c0]];
  var traversed = new Array(R * C);
  var getIndex = (r, c) => r * C + c;
  traversed[getIndex(r0, c0)] = 1;

  var index = 0;
  var len, r, c, i;
  while (index < queue.length) {
    len = queue.length;
    while (index < len) {
      [r, c] = queue[index++];
      if (r > 0) {
        i = getIndex(r - 1, c);
        if (traversed[i] === undefined) {
          queue.push([r - 1, c]);
          traversed[i] = 1;
        }
      }
      if (r < R - 1) {
        i = getIndex(r + 1, c);
        if (traversed[i] === undefined) {
          queue.push([r + 1, c]);
          traversed[i] = 1;
        }
      }
      if (c > 0) {
        i = getIndex(r, c - 1);
        if (traversed[i] === undefined) {
          queue.push([r, c - 1]);
          traversed[i] = 1;
        }
      }
      if (c < C - 1) {
        i = getIndex(r, c + 1);
        if (traversed[i] === undefined) {
          queue.push([r, c + 1]);
          traversed[i] = 1;
        }
      }
    }
  }

  return queue;
};

module.exports = allCellsDistOrder;
