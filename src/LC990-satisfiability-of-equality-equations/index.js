/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  var len = equations.length;
  var graphEqure = {};
  var graphNotEqure = {};
  var a, b, c;

  for (var i = 0; i < len; i++) {
    [a, c, , b] = equations[i];
    (graphEqure[a] || (graphEqure[a] = [])).push(a);
    (graphEqure[b] || (graphEqure[b] = [])).push(b);
    if (c === '=') {
      if (!canEqure(a, b)) return false;
      if (!canEqure(b, a)) return false;
      graphEqure[a].push(b);
      graphEqure[b].push(a);
    } else {
      if (!canNotEqure(a, b)) return false;
      if (!canNotEqure(b, a)) return false;
      (graphNotEqure[a] || (graphNotEqure[a] = [])).push(b);
      (graphNotEqure[b] || (graphNotEqure[b] = [])).push(a);
    }
  }

  function canEqure(a, b) {
    var visited = {};
    var queue = [a];
    var node, edge;

    while (queue.length) {
      node = queue.shift();
      if (visited[node]) continue;
      visited[node] = 1;
      queue.push(...graphEqure[node]);

      edge = graphNotEqure[node];
      if (!edge) continue;
      if (edge.indexOf(b) !== -1) return false;
    }

    return true;
  }

  function canNotEqure(a, b) {
    var visited = {};
    var queue = [a];
    var node;

    while (queue.length) {
      node = queue.shift();
      if (visited[node]) continue;
      visited[node] = 1;
      if (node === b) return false;
      queue.push(...graphEqure[node]);
    }

    return true;
  }

  return true;
};

module.exports = equationsPossible;
