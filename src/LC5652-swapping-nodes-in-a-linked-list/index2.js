/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  var sentinel = new ListNode(null, head);

  var node = sentinel;
  for (var i = 1; i < k; i++) node = node.next;
  var a = node;

  var b = sentinel;
  node = node.next;
  while (node.next) {
    b = b.next;
    node = node.next;
  }

  [a.next, b.next] = [b.next, a.next];
  a = a.next;
  b = b.next;
  [a.next, b.next] = [b.next, a.next];

  return sentinel.next;
};

module.exports = swapNodes;
