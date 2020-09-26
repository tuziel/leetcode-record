/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function f(left, right) {
    var res = [];
    for (var val = left; val <= right; val++) {
      var leftList = left < val ? f(left, val - 1) : [[]];
      var rightList = val < right ? f(val + 1, right) : [[]];

      leftList.forEach((leftItems) => {
        rightList.forEach((rightItems) => {
          res.push([val, ...leftItems, ...rightItems]);
        });
      });
    }
    return res;
  }

  return f(1, n).map(createBinaryTree);
};

function createBinaryTree(arr) {
  var root = new TreeNode(arr.shift());

  while (arr.length) {
    var parent = root;
    var node = arr.shift();
    while (1) {
      if (node < parent.val) {
        if (!parent.left) {
          parent.left = new TreeNode(node);
          break;
        } else {
          parent = parent.left;
        }
      } else {
        if (!parent.right) {
          parent.right = new TreeNode(node);
          break;
        } else {
          parent = parent.right;
        }
      }
    }
  }

  return root;
}

module.exports = generateTrees;
