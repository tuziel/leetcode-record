/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  function createNode(left, right) {
    var len = right - left;
    if (len < 0) return null;
    var current = postorder.pop();
    var index = inorder.indexOf(current, left);
    var nodeR = createNode(index + 1, right);
    var nodeL = createNode(left, index - 1);
    var node = new TreeNode(current);
    node.left = nodeL;
    node.right = nodeR;
    return node;
  }

  return createNode(0, inorder.length - 1);
};

module.exports = buildTree;
/* global TreeNode */
