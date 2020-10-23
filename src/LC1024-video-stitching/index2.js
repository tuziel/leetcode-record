/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function (clips, T) {
  var len = clips.length;
  var cache = new Array(T).fill().map(() => []);

  clips.forEach(([left, right], index) => {
    if (right > T) right = T;
    while (left < right) cache[left++].push(index);
  });

  var record = new Array(len);
  for (var i = 0; i < T; i++) {
    if (cache[i].length === 0) return -1;
    if (cache[i].length === 1) record[cache[i][0]] = 1;
  }

  var min = Infinity;
  function backtrack(count, time) {
    if (count >= min) return;
    if (time >= T) return min = count;

    var indexes = cache[time];
    var hasRecord = indexes.reduce((res, index) => res || record[index], 0);
    if (hasRecord) return backtrack(count, time + 1);

    indexes.forEach((index) => {
      record[index] = 1;
      backtrack(count + 1, time + 1);
      record[index] = 0;
    });
  }

  backtrack(record.reduce((a, b) => a + b, 0), 0);
  return min;
};

module.exports = videoStitching;
