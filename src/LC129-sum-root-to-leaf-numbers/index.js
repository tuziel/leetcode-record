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
var sumNumbers = function (root) {
  if (!root) return 0;
  var res = 0;

  function dlr(node, total) {
    total = total * 10 + node.val;
    if (node.left) dlr(node.left, total);
    if (node.right) dlr(node.right, total);
    if (!node.left && !node.right) res += total;
  }

  dlr(root, 0);
  return res;
};

module.exports = sumNumbers;
