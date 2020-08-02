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
var flatten = function (root) {
  if (!root) return null;
  var left = root.left;
  var right = root.right;

  // 左右节点为 null, 返回自身
  if (left === right) return root;
  var end;

  // 拼接链表 root -> left -> ... -> f(left) -> right
  if (left) {
    root.right = left;
    end = flatten(left);
    end.right = right;
    // 移除左节点
    root.left = null;
  }

  // 结尾是 right -> ... -> f(right) -> null
  if (right) return flatten(right);
  // 结尾是 f(left) -> null
  return end;
};


module.exports = flatten;
