/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function f(left, right) {
    if (left > right) return null;
    if (left === right) return new TreeNode(nums[left]);
    var mid = (left + right) >> 1;
    if (nums[mid] === null) return null;

    var root = new TreeNode(nums[mid]);
    root.left = f(left, mid - 1);
    root.right = f(mid + 1, right);

    return root;
  }

  return f(0, nums.length - 1);
};

module.exports = sortedArrayToBST;
