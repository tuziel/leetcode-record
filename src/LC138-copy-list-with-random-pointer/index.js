/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  var map = new Map();
  var dummy = new Node(0);

  function getCopy(node) {
    if (!node) return null;
    if (!map.has(node)) map.set(node, new Node(node.val));
    return map.get(node);
  }

  for (var node = dummy; head; head = head.next) {
    node = node.next = getCopy(head);
    node.random = getCopy(head.random);
  }

  return dummy.next;
};

module.exports = copyRandomList;
