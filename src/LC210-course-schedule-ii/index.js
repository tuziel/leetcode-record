/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  var weight = new Array(numCourses).fill(0);
  var graph = {};
  var result = [];
  var edges;

  var index = prerequisites.length;
  while (index--) {
    edges = prerequisites[index];
    weight[edges[0]]++;
    (graph[edges[1]] || (graph[edges[1]] = [])).push(edges[0]);
  }

  while ((index = weight.indexOf(0)) >= 0) {
    result.push(index);
    weight[index]--;
    if ((edges = graph[index])) {
      var i = edges.length;
      while (i--) weight[edges[i]]--;
    }
  }

  return result.length === numCourses ? result : [];
};

module.exports = findOrder;
