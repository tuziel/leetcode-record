/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (!points.length) return 0;

  var res = 0;
  var next = Infinity;
  points.sort(([l1, r1], [l2, r2]) => (l1 - l2) || (r1 - r2))
    .forEach(([left, right]) => {
      if (next < left) {
        res++;
        next = right;
      } else if (right < next) {
        next = right;
      }
    });

  return res + 1;
};

module.exports = findMinArrowShots;
