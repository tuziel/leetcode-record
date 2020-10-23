/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function (clips, T) {
  var cache = new Array(T).fill(0);
  clips.forEach(([start, end]) => {
    if (start < T - 1) cache[start] = Math.max(cache[start], end);
  });

  var res = 1;
  var left = 0;
  var right = cache[left];
  var next = right;
  while (right < T) {
    while (left < right) next = Math.max(next, cache[++left]);
    if (left === (right = next)) return -1;
    res++;
  }

  return res;
};

module.exports = videoStitching;
