/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  var result = [];
  var queue = [root];

  var i, total, count, node;
  while ((count = queue.length)) {
    total = 0;
    for (i = 0; i < count; i++) {
      node = queue.shift();
      total += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(total / count);
  }

  return result;
};

module.exports = averageOfLevels;
