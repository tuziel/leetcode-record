module.exports = {
  TreeNode,
  createTree,
  createTreeList,
  ListNode,
  createList,
  slice64,
};

/**
 * 生成树节点
 * @class
 * @template T
 * @param {T} val 节点的值
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * 生成树并返回根节点
 * @template T
 * @param {T[]} values 节点值的列表
 * @returns {TreeNode<T>} 树的根节点
 */
function createTree(values) {
  return createTreeList(values)[0] || null;
}

/**
 * 生成树并返回节点列表
 * @template T
 * @param {T[]} values 节点值的列表
 * @returns {TreeNode<T>[]} 树的节点列表
 */
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
    nodes.push(parent.left = curr != null ? new TreeNode(curr) : null);
    curr = values[i++];
    nodes.push(parent.right = curr != null ? new TreeNode(curr) : null);
  }

  return nodes;
}

/**
 * 生成链表节点
 * @class
 * @template T
 * @param {T} val 节点的值
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 生成链表并返回头节点
 * @template T
 * @param {T[]} values 节点值的列表
 * @returns {ListNode<T>[]} 链表的头节点
 */
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

/**
 * 转为字符串并限制为64字符内
 */
function slice64(data) {
  return ((i) => `${i.length > 64 ? `${i.slice(0, 61)}...` : i}`)(JSON.stringify(data));
}
