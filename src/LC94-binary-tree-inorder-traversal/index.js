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
var inorderTraversal = function (root) {
  if (!root) return [];
  var result = [];
  var stack = [[root, 0]];

  while (stack.length) {
    var [node, status] = stack.pop();

    if (status === 0) {
      if (node.right) stack.push([node.right, 0]);
      stack.push([node, 1]);
      if (node.left) stack.push([node.left, 0]);
    } else {
      result.push(node.val);
    }
  }

  return result;
};

module.exports = inorderTraversal;
