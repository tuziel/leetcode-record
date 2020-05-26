module.exports = {
  TreeNode,
  createTree,
  createTreeList,
  ListNode,
  createList,
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function createTree(values) {
  return createTreeList(values)[0] || null;
}

function createTreeList(values) {
  const len = values.length;
  if (!len) return [];

  const rootVal = values[0];
  if (rootVal === null) return [null];

  const nodes = [new TreeNode(rootVal)];
  let i = 1;
  let j = 0;
  let parent, curr;

  while (i < len) {
    while ((parent = nodes[j++]) === null);
    curr = values[i++];
    nodes.push(parent.left = curr !== null ? new TreeNode(curr) : null);
    curr = values[i++];
    nodes.push(parent.right = curr !== null ? new TreeNode(curr) : null);
  }

  return nodes;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createList(values) {
  let len = values.length;
  let node = null;
  let prev;
  while (len--) {
    prev = new ListNode(values[len]);
    prev.next = node;
    node = prev;
  }
  return node;
}
