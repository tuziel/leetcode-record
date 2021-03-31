/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  var small = new ListNode();
  var large = new ListNode();
  var curr = head;
  var currS = small;
  var currL = large;

  while (curr) {
    if (curr.val < x) currS = (currS.next = curr);
    else currL = (currL.next = curr);
    curr = curr.next;
  }
  currS.next = large.next;
  currL.next = null;

  return small.next;
};

module.exports = partition;
