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
  left: ListNode<T> | null;
}

interface ListNodeConstructor {
  new <T>(val: T): ListNode<T>;
}

declare global {
  const _: typeof lodash;
  const TreeNode: TreeNodeConstructor;
  const ListNode: ListNodeConstructor;
}
