/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  var res = [];
  if (!root) return res;
  var queue = [root];

  var curr, len;
  while ((len = queue.length)) {
    res.push(queue.map((node) => node.val));

    while (len--) {
      curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  return res.reverse();
};

module.exports = levelOrderBottom;
