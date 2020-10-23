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
var isPalindrome = function (head) {
  var i = head;
  var j = head;
  var stack = [];

  while (j) {
    stack.push(i.val);
    i = i.next;
    if (!(j = j.next)) {
      stack.pop();
      break;
    }
    j = j.next;
  }

  while (stack.length) {
    j = stack.pop();
    if (i.val === j) i = i.next;
    else return false;
  }

  return true;
};

module.exports = isPalindrome;
