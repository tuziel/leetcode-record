/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  var total = 0;

  function rdl(node) {
    if (!node) return;

    rdl(node.right);
    total = node.val += total;
    rdl(node.left);
  }

  rdl(root);
  return root;
};

module.exports = convertBST;
