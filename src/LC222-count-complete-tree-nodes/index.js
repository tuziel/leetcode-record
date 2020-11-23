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
var countNodes = function (root) {
  if (!root) return 0;

  var min, max, mid;
  var node = root;
  min = 1;
  while ((node = node.left)) min <<= 1;
  max = min << 1;

  while (min <= max) {
    mid = (min + max) >> 1;

    var stack = [];
    var temp = mid;
    while (temp > 1) {
      stack.push(temp & 1);
      temp >>= 1;
    }

    node = root;
    while (stack.length) node = stack.pop() ? node.right : node.left;

    if (min === max) return node ? mid : mid - 1;
    if (node) min = mid + 1;
    else max = mid - 1;
    if (min > max) max = min;
  }
};

module.exports = countNodes;
