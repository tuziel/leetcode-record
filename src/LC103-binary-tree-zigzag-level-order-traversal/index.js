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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  var queue = [root];
  var result = [];

  for (var i = 0, count; (count = queue.length); i++) {
    var cache = [];
    while (count--) {
      var curr = queue.shift();
      if (i & 1) cache.unshift(curr.val);
      else cache.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    result.push(cache);
  }

  return result;
};

module.exports = zigzagLevelOrder;
