/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  startTime.sort((a, b) => a - b);
  endTime.sort((a, b) => a - b);
  var max = (a, b) => a > b ? a : b;
  var lenS = startTime.length;
  var lenE = endTime.length;
  var end = max(startTime[lenS - 1], endTime[lenE - 1]);
  var record = new Array(end).fill(0);
  var count = 0;
  var i = 0;
  var j = 0;

  for (var now = 0; now <= end; now++) {
    while (startTime[i] < now && i < lenS) { i++; }
    while (startTime[i] === now) {
      count++;
      i++;
    }
    record[now] = count;
    while (endTime[j] < now && j < lenE) { j++; }
    while (endTime[j] === now) {
      count--;
      j++;
    }
  }

  return record[queryTime] || 0;
};

module.exports = busyStudent;
