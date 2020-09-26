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
var recoverTree = function (root) {
  if (!root) return root;

  var list = [];
  var stack = [root];

  while (stack.length) {
    var curr = stack.pop();
    list.push(curr.val);
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  list.sort((a, b) => a - b);

  var index = 0;
  function ldr(node) {
    if (!node) return;
    ldr(node.left);
    node.val = list[index++];
    ldr(node.right);
  }
  ldr(root);
};

module.exports = recoverTree;
