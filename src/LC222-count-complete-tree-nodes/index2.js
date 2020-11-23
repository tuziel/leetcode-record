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
var countNodes = function (root) {
  if (!root) return 0;

  var res = 0;
  var stack = [root];
  while (stack.length) {
    var node = stack.pop();
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
    res++;
  }

  return res;
};

module.exports = countNodes;
