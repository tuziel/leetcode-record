/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  var len = intervals.length;
  if (!len) return [newInterval];

  var [l1, r1] = newInterval;
  var result = [];
  intervals.push([Infinity, Infinity]);

  var i = 0;
  while (intervals[i][1] < l1) result.push(intervals[i++]);

  for (; intervals[i][0] <= r1; i++) {
    l1 = Math.min(l1, intervals[i][0]);
    r1 = Math.max(r1, intervals[i][1]);
  }
  result.push([l1, r1]);

  while (i < len) result.push(intervals[i++]);

  return result;
};

module.exports = insert;
