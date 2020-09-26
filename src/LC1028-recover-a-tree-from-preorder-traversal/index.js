/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  // 方便触发最后一次节点的处理
  S += '-';
  var len = S.length;
  // 添加哨兵
  var stack = [new TreeNode(0)];
  var val = 0;
  var deep = 2;

  for (var index = 0; index < len; index++) {
    if (S[index] === '-') {
      // 上个节点为数字
      if (val) {
        // 生成节点
        var node = new TreeNode(val);
        // 深度小于栈顶节点深度时，找到相同深度的节点
        while (deep < stack.length) stack.pop();
        // 深度等于栈顶节点深度，应为父节点的右节点
        if (deep === stack.length) {
          stack.pop();
          stack[stack.length - 1].right = node;
        }
        // 深度大于栈顶节点深度，应为左节点
        else stack[stack.length - 1].left = node;
        // 节点入栈
        stack.push(node);
        // 还原深度及数值信息
        val = 0;
        deep = 2;
      }

      deep++;
    } else {
      val = val * 10 + +S[index];
    }
  }

  return stack[1];
};

module.exports = recoverFromPreorder;
