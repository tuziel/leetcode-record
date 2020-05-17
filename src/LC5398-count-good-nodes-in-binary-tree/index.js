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
 * @return {number}
 */
var goodNodes = function (root) {
  var res = 0;

  function dlr(node, curr) {
    if (node.val >= curr) {
      res++;
      curr = node.val;
    }

    if (node.left) dlr(node.left, curr);
    if (node.right) dlr(node.right, curr);
  }

  dlr(root, -Infinity);
  return res;
};

module.exports = goodNodes;
