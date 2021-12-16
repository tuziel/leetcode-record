/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  var nodeA, nodeB;
  var diff = 0;

  for (nodeA = headA; nodeA; nodeA = nodeA.next) diff++;
  for (nodeB = headB; nodeB; nodeB = nodeB.next) diff--;

  for (nodeA = headA; diff > 0; diff--) nodeA = nodeA.next;
  for (nodeB = headB; diff < 0; diff++) nodeB = nodeB.next;

  while (nodeA !== nodeB) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }

  return nodeA;
};

module.exports = getIntersectionNode;
