/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort(([l1, r1], [l2, r2]) => l1 === l2 ? r1 - r2 : l1 - l2);

  const result = [];
  let [left, right] = intervals[0];
  for (const [l, r] of intervals) {
    if (l <= right) right = Math.max(right, r);
    if (right >= r) continue;

    result.push([left, right]);
    [left, right] = [l, r];
  }

  result.push([left, right]);
  return result;
};

module.exports = merge;
