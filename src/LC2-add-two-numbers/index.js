/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var node = new ListNode(null, l1);
  var carry = 0;

  // 把 l2 按位加到 l1 中
  while (l2 || carry) {
    node = node.next || (node.next = new ListNode(0));
    var val = node.val + (l2 ? l2.val : 0) + carry;
    carry = val >= 10 ? 1 : 0;
    node.val = val % 10;
    if (l2) l2 = l2.next;
  }

  return l1;
};

module.exports = addTwoNumbers;
