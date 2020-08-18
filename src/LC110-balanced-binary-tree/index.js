/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function dfs(node) {
    if (!node) return 1;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (!left || !right) return 0;
    return Math.abs(left - right) <= 1 && Math.max(left, right) + 1;
  }

  return !!dfs(root);
};

module.exports = isBalanced;
