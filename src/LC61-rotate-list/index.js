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
var rotateRight = function (head, k) {
  if (!head) return head;
  var last = head;
  var len = 1;
  while (last.next) {
    len++;
    last = last.next;
  }
  last.next = head;

  k = len - (k % len);
  while (k--) {
    last = last.next;
  }

  head = last.next;
  last.next = null;
  return head;
};

module.exports = rotateRight;
