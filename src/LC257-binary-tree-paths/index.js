/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  var res = [];
  var path = [];

  function dfs(node) {
    path.push(node.val);
    if (node.left === node.right) res.push(path.slice());
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    path.pop();
  }

  dfs(root);
  return res.map((item) => item.join('->'));
};

module.exports = binaryTreePaths;
