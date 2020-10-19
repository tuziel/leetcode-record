/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) return;

  var i = head;
  var j = head;

  // 找中点
  while (1) {
    if (!(j = j.next)) break;
    if (!(j = j.next)) break;
    i = i.next;
  }

  // 逆序
  j = i.next;
  i.next = null;
  while (j) [j.next, i, j] = [i, j, j.next];

  // 合并
  j = head;
  while (j && i !== j) [j.next, i.next, i, j] = [i, j.next, i.next, j.next];
};

module.exports = reorderList;
