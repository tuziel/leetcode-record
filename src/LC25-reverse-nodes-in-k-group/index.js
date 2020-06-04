/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  var [_head, end] = swap(head, k);
  if (_head === head) return head;

  var next = end.next;
  var nextHead, nextEnd;

  while (1) {
    [nextHead, nextEnd] = swap(next, k);
    if (nextHead === next) break;
    [end.next, next, end] = [nextHead, nextEnd.next, nextEnd];
  }

  return _head;
};

function swap(head, k) {
  if (!head) return [null, null];

  var end = head;
  var i = k;
  while (--i) if (!(end = end.next)) return [head, null];

  var next = head.next;
  head.next = end.next;
  var curr = end = head;
  i = k;
  while (--i) {
    head = next;
    next = next.next;
    head.next = curr;
    curr = head;
  }

  return [head, end];
}

module.exports = reverseKGroup;
