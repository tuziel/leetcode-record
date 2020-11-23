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
var insertionSortList = function (head) {
  var sentinel = new ListNode();
  sentinel.next = head;

  var curr = head;
  while (curr) {
    var target = sentinel;
    while (target.next) {
      if (target.next.val < curr.val) target = target.next;
      else break;
    }
    var next = curr.next;
    curr.next = curr === target.next ? null : target.next;
    target.next = curr;
    curr = next;
  }

  return sentinel.next;
};

module.exports = insertionSortList;
