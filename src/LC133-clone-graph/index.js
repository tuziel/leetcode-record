/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;
  var res = [];

  function copy({ val, neighbors }) {
    if (res[val]) return res[val];
    var curr = res[val] = new Node(val, []);
    curr.neighbors = neighbors.map(copy);
    return curr;
  }

  return copy(node);
};

module.exports = cloneGraph;
