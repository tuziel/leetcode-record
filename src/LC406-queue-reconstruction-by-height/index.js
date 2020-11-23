/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort(([h1, k1], [h2, k2]) => h1 === h2 ? k1 - k2 : h2 - h1);

  var head = new ListNode();
  people.forEach((p) => {
    var k = p[1];
    var curr = head;
    while (k--) curr = curr.next;
    var node = new ListNode(p);
    node.next = curr.next;
    curr.next = node;
  });

  var result = [];
  var node = head.next;
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = reconstructQueue;
