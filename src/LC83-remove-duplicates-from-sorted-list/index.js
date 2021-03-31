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

  var node = head;
  var next;
  while ((next = node.next)) {
    if (node.val === next.val) {
      node.next = next.next;
    } else {
      node = next;
    }
  }
  return head;
};

module.exports = deleteDuplicates;
