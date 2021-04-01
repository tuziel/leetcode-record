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
var sortList = function (head) {
  var arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  return arr.sort((a, b) => a - b).reduceRight((tail, prev) => new ListNode(prev, tail), null);
};

module.exports = sortList;
