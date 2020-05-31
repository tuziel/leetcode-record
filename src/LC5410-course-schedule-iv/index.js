/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (n, prerequisites, queries) {
  var graph = {};
  var edges;

  var index = prerequisites.length;
  while (index--) {
    edges = prerequisites[index];
    (graph[edges[0]] || (graph[edges[0]] = [])).push(edges[1]);
  }

  function search(querie) {
    var start = querie[0];
    var target = querie[1];
    var stack = [start];
    var traversed = {};
    traversed.start = 1;

    while (stack.length) {
      var curr = stack.pop();
      if (curr === target) return true;
      if (traversed[curr]) continue;
      traversed[curr] = 1;

      var nexts = graph[curr];
      if (nexts === undefined) continue;
      for (var j = 0; j < nexts.length; j++) {
        stack.push(nexts[j]);
      }
    }

    return false;
  }

  return queries.map(search);
};

module.exports = checkIfPrerequisite;
