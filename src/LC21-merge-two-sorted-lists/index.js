/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val > l2.val) [l1, l2] = [l2, l1];
  var head = l1;
  while (l1.next && l2) {
    if (l1.next.val <= l2.val) l1 = l1.next;
    else[l1.next, l2] = [l2, l1.next];
  }
  l1.next = l2;
  return head;
};

module.exports = mergeTwoLists;
