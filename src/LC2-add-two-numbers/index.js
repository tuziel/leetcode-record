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
var addTwoNumbers = function (l1, l2) {
  var head = new ListNode();
  var curr = head;
  var flag = 0;

  do {
    var n1 = l1 ? l1.val : 0;
    var n2 = l2 ? l2.val : 0;
    var s = n1 + n2 + flag;

    curr = curr.next = new ListNode(s % 10);

    flag = s >= 10 ? 1 : 0;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  } while (l1 || l2);

  curr.next = flag ? new ListNode(1) : null;

  return head.next;
};

module.exports = addTwoNumbers;
/* global ListNode */
