/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (N, edges) {
  var graph = new Array(N).fill(null).map(() => []);
  var childrenCounts = new Array(N);
  var result = new Array(N);

  edges.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  function calcChildrens(index, deep) {
    if (result[index] !== undefined) return 0;
    result[index] = 0;
    result[0] += deep++;
    var childrens = graph[index];
    return (childrenCounts[index] = childrens.reduce(
      (count, index) => count + calcChildrens(index, deep),
      0,
    )) + 1;
  }
  calcChildrens(0, 0);

  var points = N - 2;
  function calcSum(from, curr) {
    if (result[curr]) return;
    var base = result[from];
    result[curr] = base + points - childrenCounts[curr] * 2;
    graph[curr].forEach((to) => calcSum(curr, to));
  }

  graph[0].forEach((to) => calcSum(0, to));

  return result;
};

module.exports = sumOfDistancesInTree;
