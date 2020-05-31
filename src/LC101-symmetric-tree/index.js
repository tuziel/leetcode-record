/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;
  var stack = [root.left, root.right];
  var nodeL, nodeR;

  while (stack.length) {
    if (!stack.length) return false;
    nodeL = stack.pop();
    nodeR = stack.pop();
    if (nodeL === nodeR) continue;
    if (!nodeL || !nodeR) return false;
    if (nodeL.val !== nodeR.val) return false;
    stack.push(nodeL.left);
    stack.push(nodeR.right);
    stack.push(nodeL.right);
    stack.push(nodeR.left);
  }

  return stack.length === 0;
};

module.exports = isSymmetric;
