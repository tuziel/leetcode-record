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
var rightSideView = function (root) {
  var result = [];
  traverse(root, 0, result);
  return result;
};

function traverse(node, level, result) {
  if (!node) return;
  if (level++ >= result.length) result.push(node.val);
  traverse(node.right, level, result);
  traverse(node.left, level, result);
}
module.exports = rightSideView;
