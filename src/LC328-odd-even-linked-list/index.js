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
var oddEvenList = function (head) {
  if (!head) return head;
  var head2 = head.next;
  if (!head2) return head;
  var i = head;
  var j = head2;
  var k = j.next;

  while (k) {
    i = (i.next = k);
    k = k.next;
    if (!k) break;
    j = (j.next = k);
    k = k.next;
  }

  i.next = head2;
  j.next = null;
  return head;
};

module.exports = oddEvenList;
