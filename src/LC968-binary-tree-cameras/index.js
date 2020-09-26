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
var minCameraCover = function (root) {
  var result = 0;

  function lrd(node) {
    if (!node) return Infinity;
    if (!node.left && !node.right) return node.val = 2;
    var left = lrd(node.left);
    var right = lrd(node.right);

    if (left === 2 || right === 2) {
      result++;
      return node.val = 0;
    }

    return node.val = Math.min(left, right) + 1;
  }

  lrd(root);
  return root.val < 2 ? result : result + 1;
};

module.exports = minCameraCover;
