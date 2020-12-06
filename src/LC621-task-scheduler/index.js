/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  var len = tasks.length;
  if (n === 0) return len;

  var counter = new Array(26).fill(0);
  var getIndex = (char) => char.charCodeAt() - 65;

  var res = 0;
  var max = 0;
  tasks.forEach((char) => {
    var count = ++counter[getIndex(char)];
    if (count > max) {
      max = count;
      res = 1;
    } else if (count === max) {
      res++;
    }
  });

  return Math.max(res + (max - 1) * (n + 1), len);
};

module.exports = leastInterval;
