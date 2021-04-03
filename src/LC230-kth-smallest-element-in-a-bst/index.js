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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  function ldr(node) {
    if (!node) return;
    var left = ldr(node.left);
    if (left !== undefined) return left;
    if (--k === 0) return node.val;
    var right = ldr(node.right);
    if (right !== undefined) return right;
  }
  return ldr(root);
};

module.exports = kthSmallest;
