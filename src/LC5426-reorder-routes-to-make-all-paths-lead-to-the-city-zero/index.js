/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  var graph = {};
  var regraph = {};
  var edges;
  var stack = [0];
  var traversed = {};
  var res = 0;

  var index = connections.length;
  while (index--) {
    edges = connections[index];
    (graph[edges[0]] || (graph[edges[0]] = [])).push(edges[1]);
    (regraph[edges[1]] || (regraph[edges[1]] = [])).push(edges[0]);
  }


  while (stack.length) {
    index = stack.pop();
    if (traversed[index]) continue;
    traversed[index] = 1;
    edges = graph[index];
    if (edges) {
      for (var i = 0; i < edges.length; i++) {
        if (traversed[edges[i]]) continue;
        stack.push(edges[i]);
        res++;
      }
    }
    edges = regraph[index];
    if (edges) stack.push(...edges);
  }

  return res;
};

module.exports = minReorder;
