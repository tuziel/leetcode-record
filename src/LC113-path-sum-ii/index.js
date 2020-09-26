/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  var vals = [];
  var total = 0;
  var result = [];

  function dfs(node) {
    if (!node) return;
    vals.push(node.val);
    total += node.val;

    if (!node.left && !node.right && total === sum) result.push(vals.slice());
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);

    vals.pop();
    total -= node.val;
  }

  dfs(root);
  return result;
};

module.exports = pathSum;
