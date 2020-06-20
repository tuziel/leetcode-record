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
var maxPathSum = function (root) {
  var res = -Infinity;

  var max = (a, b) => a > b ? a : b;

  function dfs(node) {
    if (!node) return 0;
    var val = node.val;
    var left = dfs(node.left);
    var right = dfs(node.right);

    res = max(res, val + left + right);
    return max(0, val + max(left, right));
  }

  dfs(root);

  return res;
};

module.exports = maxPathSum;
