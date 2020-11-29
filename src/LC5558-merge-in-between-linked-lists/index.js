/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  var node = list1;

  b -= a - 1;
  while (--a) node = node.next;
  var temp = node;
  node = node.next;
  temp.next = list2;

  while (list2.next) list2 = list2.next;

  while (b--) node = node.next;
  list2.next = node;

  return list1;
};

module.exports = mergeInBetween;
