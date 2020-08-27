/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  var count = tickets.length;
  var graph = {};
  var record = {};
  var path = [];

  for (var i = 0; i < count; i++) {
    var [from, to] = tickets[i];
    var key = `${from}-${to}`;

    if (record[key]) {
      record[key]++;
    } else {
      record[key] = 1;
      (graph[from] || (graph[from] = [])).push(to);
    }
  }

  for (i in graph) graph[i].sort();

  function dfs(node) {
    path.push(node);
    if (count-- <= 0) return;

    var edges = graph[node];
    if (edges) {
      for (var i = 0, l = edges.length; i < l; i++) {
        var key = `${node}-${edges[i]}`;
        if (!record[key]) continue;
        record[key]--;
        dfs(edges[i]);
        if (count <= 0) return;
        record[key]++;
      }
    }

    path.pop();
    count++;
  }

  dfs('JFK');
  return path;
};

module.exports = findItinerary;
