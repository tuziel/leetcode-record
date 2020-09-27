/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  var valP = p.val;
  var valQ = q.val;

  while (root) {
    var val = root.val;
    if (valP < val && valQ < val) root = root.left;
    else if (val < valP && val < valQ) root = root.right;
    else return root;
  }
};

module.exports = lowestCommonAncestor;
