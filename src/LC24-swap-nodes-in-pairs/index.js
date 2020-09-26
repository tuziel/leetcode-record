/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  var sentinel = new ListNode();
  var n0, n1, n2;

  sentinel.next = head;
  n0 = sentinel;

  while (1) {
    n1 = n0.next;
    if (n1 === null) break;
    n2 = n1.next;
    if (n2 === null) break;

    n1.next = n2.next;
    n2.next = n1;
    n0.next = n2;
    n0 = n1;
  }

  return sentinel.next;
};

module.exports = swapPairs;
