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
var levelOrder = function (root) {
  if (!root) return [];
  var queue = [root];
  var result = [];
  var index, len, _node, _arr;

  while (index = 0, len = queue.length) {
    result.push(_arr = new Array(len));
    while (index < len) {
      _node = queue[index];
      _arr[index++] = _node.val;
      if (_node.left) queue.push(_node.left);
      if (_node.right) queue.push(_node.right);
    }
    while (index--) queue.shift();
  }

  return result;
};

module.exports = levelOrder;
