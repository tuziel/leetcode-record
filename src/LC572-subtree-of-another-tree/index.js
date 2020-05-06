/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (t === null) return s === null;

  var rootVal = t.val;
  var list = [s];
  var index = 0;
  var stack = [];

  while (index < list.length) {
    var node = list[index++];
    if (node.val === rootVal) stack.push(node);
    if (node.left !== null) list.push(node.left);
    if (node.right !== null) list.push(node.right);
  }

  index = stack.length;
  while (index--) if (compare(stack[index], t)) return true;
  return false;
};

function compare(s, t) {
  if (s === null) return t === null;
  if (t === null) return false;

  if (s.val !== t.val) return false;
  if (!compare(s.left, t.left)) return false;
  if (!compare(s.right, t.right)) return false;

  return true;
}

module.exports = isSubtree;
