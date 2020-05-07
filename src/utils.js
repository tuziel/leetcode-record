module.exports = {
  TreeNode,
  createTree,
  ListNode,
  createList,
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function createTree(values) {
  const len = values.length;
  const nodes = [];
  const left = (x) => (x << 1) + 1;
  const right = (x) => (x + 1 << 1);
  for (let i = len; i--;) {
    if (values[i] == null) {
      nodes[i] = null;
    } else {
      const node = nodes[i] = new TreeNode(values[i]);
      if (left(i) < len) node.left = nodes[left(i)];
      if (right(i) < len) node.right = nodes[right(i)];
    }
  }
  return nodes[0] || null;
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
