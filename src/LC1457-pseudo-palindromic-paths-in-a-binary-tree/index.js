/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
  if (root === null) return 0;
  var cache = {};
  var singels = 0;
  var res = 0;

  function dfs(node) {
    var flag = cache[node.val];
    cache[node.val] = !flag;
    if (flag) singels--;
    else singels++;

    if (node.left === null && node.right === null) {
      if (singels <= 1) res++;
    }

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);

    cache[node.val] = flag;
    if (flag) singels++;
    else singels--;
  }

  dfs(root);

  return res;
};

module.exports = pseudoPalindromicPaths;
