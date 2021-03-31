/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  var sentinel = new ListNode(null, head);
  var prev = sentinel;
  var i = left;
  while (--i) prev = prev.next;
  var curr = prev.next;
  i = right - left;
  while (i--) {
    var next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }
  return sentinel.next;
};

module.exports = reverseBetween;
