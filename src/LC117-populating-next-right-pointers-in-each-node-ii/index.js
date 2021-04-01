/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  var head = root;
  while (head) {
    var node = head;
    var flag = true;
    var curr = null;
    var next = null;

    while (node && !curr) {
      curr = flag ? node.left : node.right;
      if ((flag = !flag)) node = node.next;
    }
    head = curr;

    while (node) {
      while (node && !next) {
        next = flag ? node.left : node.right;
        if ((flag = !flag)) node = node.next;
      }
      if (curr && next) curr.next = next;
      [curr, next] = [next, null];
    }
  }

  return root;
};

module.exports = connect;
