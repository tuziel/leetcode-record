/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  var length = lists.length;
  if (length === 0) return null;
  var step = 1;
  while (step < length) {
    // 两个一组合并
    for (var i = 0; i < length; i += step << 1) {
      lists[i] = merge(lists[i] || null, lists[i + step] || null);
    }
    step <<= 1;
  }
  return lists[0];
};

function merge(a, b) {
  if (!a) return b;
  if (!b) return a;
  if (a.val > b.val) [a, b] = [b, a];
  var head = a;
  while (a.next && b) {
    if (a.next.val <= b.val) a = a.next;
    else[a.next, b] = [b, a.next];
  }
  a.next = b;
  return head;
}

module.exports = mergeKLists;
