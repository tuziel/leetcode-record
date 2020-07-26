/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var target = head;
  var curr = head;

  while (n--) curr = curr.next;
  if (!curr) return head.next;

  while (curr.next) {
    curr = curr.next;
    target = target.next;
  }

  target.next = target.next.next;
  return head;
};

module.exports = removeNthFromEnd;
