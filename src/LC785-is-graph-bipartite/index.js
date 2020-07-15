/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  var len = graph.length;
  var record = new Array(len);
  var queue = [];

  var curr, count, flag;
  for (var i = 0; i < len; i++) {
    if (record[i] === undefined) {
      queue.push(i);
      while ((count = queue.length)) {
        flag ^= 1;
        while (count--) {
          curr = queue.shift();
          if (record[curr] === flag) return false;
          if (record[curr] !== undefined) continue;
          queue.push(...graph[curr]);
          record[curr] = flag ^ 1;
        }
      }
    }
  }

  return true;
};

module.exports = isBipartite;
