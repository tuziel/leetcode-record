/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  if (root === null) return 0;

  function dfs(node) {
    var l1, l2, r1, r2;
    l1 = l2 = r1 = r2 = 0;
    if (node.left !== null) [l1, l2] = dfs(node.left);
    if (node.right !== null) [r1, r2] = dfs(node.right);

    return [node.val + l2 + r2, Math.max(l1, l2) + Math.max(r1, r2)];
  }

  return Math.max(...dfs(root));
};

module.exports = rob;
