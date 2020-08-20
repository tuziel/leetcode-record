/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  var queue = [root];
  var deep = 0;
  var node, len;

  while (queue.length) {
    deep++;
    len = queue.length;
    while (len--) {
      node = queue.shift();
      if (node.left === node.right) return deep;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
};

module.exports = minDepth;
