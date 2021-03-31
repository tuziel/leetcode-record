/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  var sentinel = new ListNode(null, head);
  var prev = sentinel;
  var node = head;
  var next = node.next;
  while (next) {
    if (node.val !== next.val) {
      prev = node;
      node = next;
    } else {
      while (next && node.val === next.val) {
        next = next.next;
      }
      node = prev.next = next;
    }
    if (!node) break;
    next = node.next;
  }
  return sentinel.next;
};

module.exports = deleteDuplicates;
