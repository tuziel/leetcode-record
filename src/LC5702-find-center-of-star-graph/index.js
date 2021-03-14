/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  var [a, b] = edges[0];
  var [c, d] = edges[1];

  return a === c || a === d ? a : b;
};

module.exports = findCenter;
