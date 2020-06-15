/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const data = [root];
  let index = 0;

  while (index < data.length) {
    const end = data.length;
    while (index < end) {
      const curr = data[index];
      if (curr !== null) {
        data.push(curr.left);
        data.push(curr.right);
      }
      data[index++] = curr && curr.val;
    }
  }

  return data;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const len = data.length;
  if (!len) return null;

  const rootVal = data[0];
  if (rootVal === null) return null;

  const nodes = [new TreeNode(rootVal)];
  let i = 1;
  let j = 0;
  let parent, curr;

  while (i < len) {
    while ((parent = nodes[j++]) === null);
    curr = data[i++];
    nodes.push(parent.left = curr !== null ? new TreeNode(curr) : null);
    curr = data[i++];
    nodes.push(parent.right = curr !== null ? new TreeNode(curr) : null);
  }

  return nodes[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

module.exports = {
  serialize,
  deserialize,
};
/* global TreeNode */
