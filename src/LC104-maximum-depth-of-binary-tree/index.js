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
var maxDepth = function (root) {
  if (!root) return 0;
  var queue = [root];
  var deep = 0;

  var len, curr;
  while ((len = queue.length)) {
    while (len--) {
      curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    deep++;
  }

  return deep;
};

module.exports = maxDepth;
