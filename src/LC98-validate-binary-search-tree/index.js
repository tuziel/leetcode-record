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
var isValidBST = function (root) {
  return traverse(root, -Infinity, Infinity);
};

function traverse(current, min, max) {
  if (current === null) return true;
  if (current.val <= min || current.val >= max) return false;
  var left = current.left;
  var right = current.right;

  if (left && left.val >= current.val) return false;
  if (right && current.val >= right.val) return false;

  if (!traverse(left, min, current.val)) return false;
  if (!traverse(right, current.val, max)) return false;

  return true;
}

module.exports = isValidBST;
