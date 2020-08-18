/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null;
  var root = new TreeNode();
  var ln = head;

  // BFS 创建树
  var cache = [root];
  var tn;
  while (ln) {
    tn = cache.shift();
    if ((ln = ln.next)) cache.push(tn.left = new TreeNode());
    else break;
    if ((ln = ln.next)) cache.push(tn.right = new TreeNode());
  }

  // 中序遍历填充树
  ln = head;
  function ldr(node) {
    if (!node) return;
    ldr(node.left);
    node.val = ln.val;
    ln = ln.next;
    ldr(node.right);
  }

  ldr(root);

  return root;
};

module.exports = sortedListToBST;
/* global TreeNode */
