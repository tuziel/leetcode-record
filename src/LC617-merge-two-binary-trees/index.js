/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  if (!t1) return t2;
  var stack1 = [t1];
  var stack2 = [t2];

  while (stack1.length) {
    var node1 = stack1.pop();
    var node2 = stack2.pop();

    if (node1 && node2) node1.val += node2.val;

    if (node1.left) {
      stack1.push(node1.left);
      if (node2 && node2.left) stack2.push(node2.left);
      else stack2.push(null);
    } else {
      if (node2 && node2.left) node1.left = node2.left;
    }
    if (node1.right) {
      stack1.push(node1.right);
      if (node2 && node2.right) stack2.push(node2.right);
      else stack2.push(null);
    } else {
      if (node2 && node2.right) node1.right = node2.right;
    }
  }

  return t1;
};

module.exports = mergeTrees;
