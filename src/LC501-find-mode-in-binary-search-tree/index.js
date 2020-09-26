/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  var val = null;
  var count = 0;
  var max = 1;
  var result = [];

  function ldr(node) {
    if (!node) return;

    ldr(node.left);

    if (node.val === val) {
      count++;
    } else {
      if (count > max) {
        result = [val];
        max = count;
      } else if (count === max) {
        result.push(val);
      }
      val = node.val;
      count = 1;
    }

    ldr(node.right);
  }

  ldr(root);
  ldr(new TreeNode(null));
  return result;
};

module.exports = findMode;
/* global TreeNode */
