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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  var curr = root;
  var left, right;

  while (curr) {
    if (curr.left) {
      left = curr.left;
      right = curr.right;
      curr.right = left;
      while (left.right) left = left.right;
      left.right = right;
      curr.left = null;
    }

    curr = curr.right;
  }
};

module.exports = flatten;
