/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  var cache = [];

  var node = head;
  while (node) {
    cache.push(node);
    node = node.next;
  }

  [cache[k - 1], cache[cache.length - k]] = [cache[cache.length - k], cache[k - 1]];
  cache.reduce((prev, next) => prev.next = next);
  cache[cache.length - 1].next = null;

  return cache[0];
};

module.exports = swapNodes;
