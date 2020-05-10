/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  var finds = 0;
  var deep = 0;
  var record;

  function dfs(node) {
    if (!node) return;
    if (finds === 2) return;

    deep++;
    dfs(node.left);

    if (finds === 1 && deep <= 0) {
      record = node;
      deep = 0;
    }
    if (node === p || node === q) {
      if (++finds === 1) record = node;
      deep = 0;
    }

    dfs(node.right);
    deep--;
  }

  dfs(root);

  return record;
};

module.exports = lowestCommonAncestor;
