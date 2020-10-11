/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  var i = head;
  var j = head;

  while (i) {
    i = i.next;
    if (i) i = i.next;
    else return false;

    j = j.next;

    if (i === j) return true;
  }

  return false;
};

module.exports = hasCycle;
