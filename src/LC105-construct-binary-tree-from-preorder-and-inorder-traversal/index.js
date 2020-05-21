/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  var lim = inorder.length - 1;
  if (lim < 0) return null;

  // 当前 preorder 的位置
  var index = 0;
  // 生成根节点
  var rootVal = preorder[index++];
  var root = new TreeNode(rootVal);

  // 找到根节点在 inorder 的位置
  var rootIndex = 0;
  while (rootVal !== inorder[rootIndex]) rootIndex++;

  // 向 inorder 两边寻找 preorder 的值
  root.left = find(rootIndex, 0, -1);
  root.right = find(rootIndex, lim, 1);

  // 从 start 到 end 寻找
  function find(start, end, dir) {
    if (start === end) return null;
    if (index > lim) return null;
    // 当前要找的 preorder 的值
    var curr = preorder[index];

    // start 为父节点的位置，从下一个位置开始找
    var i = start + dir;
    var flag = dir === 1;
    var isInRange = flag ? (i) => i <= end : (i) => i >= end;

    while (isInRange(i)) {
      // 如果找到对应的值
      if (curr === inorder[i]) {
        // 寻找下一个 preorder 的值
        index++;
        var node = new TreeNode(curr);
        node.left = find(i, flag ? start : end, -1);
        node.right = find(i, flag ? end : start, 1);
        return node;
      }
      i += dir;
    }

    return null;
  }

  return root;
};

module.exports = buildTree;
/* global TreeNode */
