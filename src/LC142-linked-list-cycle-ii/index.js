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
var detectCycle = function (head) {
  var fast = head;
  var slow = head;

  while (fast) {
    fast = fast.next;
    if (fast) fast = fast.next;
    else return null;

    slow = slow.next;

    if (fast === slow) {
      fast = head;

      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }

      return fast;
    }
  }

  return null;
};

module.exports = detectCycle;
