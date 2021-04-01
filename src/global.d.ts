import * as lodash from 'lodash';

interface TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

interface TreeNodeConstructor {
  new <T>(val: T): TreeNode<T>;
}

interface ListNode<T> {
  val: T;
  next: ListNode<T> | null;
}

interface ListNodeConstructor {
  new <T>(val: T, next: ListNode<T>): ListNode<T>;
}

interface Node<T> {
  val: T;
  neighbors: this[];
}

interface NodeConstructor {
  new <T>(val: T, neighbors: Node<T>[]): Node<T>;
}

declare global {
  const _: typeof lodash;
  const TreeNode: TreeNodeConstructor;
  const ListNode: ListNodeConstructor;
  const Node: NodeConstructor;
}
