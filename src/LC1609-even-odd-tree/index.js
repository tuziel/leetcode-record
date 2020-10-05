/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  var queue = [root];
  var level = 0;

  while (queue.length) {
    var len = queue.length;
    var even = level % 2 === 0;
    var last = even ? 0 : Infinity;

    while (len--) {
      var curr = queue.shift();
      if ((curr.val % 2 === 1) ^ even) return false;
      if (curr.val === last) return false;
      if ((curr.val - last > 0) ^ even) return false;
      last = curr.val;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    level++;
  }

  return true;
};

module.exports = isEvenOddTree;
