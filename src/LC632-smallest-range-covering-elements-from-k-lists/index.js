/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  var len = nums.length;
  var diff = Infinity;
  var min = -Infinity;
  var max = -Infinity;
  var res = [-Infinity, Infinity];
  var curr;

  // XXX: 这里利用 js 特性，直接给数组添加了一个 head 属性表示当前位置
  // 然而还是建议用官方的做法
  var queue = new PriorityQueue((a, b) => a[a.head] - b[b.head]);

  // 先将所有数组放入队列中
  for (var i = 0; i < len; i++) {
    curr = nums[i];
    curr.head = 0;
    queue.push(curr);
    // 更新区间的最大值
    if (curr[0] > max) max = curr[0];
  }

  while (1) {
    // 取出当前堆顶数组
    curr = queue.pop();
    if (curr[curr.head] > min) {
      // 更新区间的最小值
      min = curr[curr.head];

      // 判断是否最小区间
      if (max - min < diff) {
        diff = max - min;
        res = [min, max];
      }
    }

    // 移动到下个位置
    curr.head++;
    // 已经遍历过该数组所有元素，不会再产生新的区间，退出循环
    if (curr.head >= curr.length) break;

    // 更新区间的最大值
    if (curr[curr.head] > max) max = curr[curr.head];
    // 重新放入队列
    queue.push(curr);
  }

  return res;
};

/**
 * 优先队列
 * @param {(a, b) => number} compareFn 用于确定元素顺序的方法
 */
function PriorityQueue(compareFn) {
  this.heap = [];
  this.compareFn = compareFn;
}
/** 获取当前队列长度 */
PriorityQueue.prototype.length = function () {
  return this.heap.length;
};
/** 添加元素到队列 */
PriorityQueue.prototype.push = function (item) {
  var heap = this.heap;
  // 添加元素到末尾
  heap.push(item);

  var curr = heap.length - 1;
  var parent;
  var compareFn = this.compareFn;

  // 父节点大于当前节点时，交换节点
  // 当前节点大于父节点，或到达栈顶时停止
  while (curr > 0) {
    parent = (curr - 1) >> 1;
    if (compareFn(heap[parent], heap[curr]) <= 0) break;
    [heap[curr], heap[parent]] = [heap[parent], heap[curr]];
    curr = parent;
  }

  return heap.length;
};
/** 从队列中弹出元素 */
PriorityQueue.prototype.pop = function () {
  var heap = this.heap;
  var len = heap.length;
  // 少于一个元素时直接弹出当前元素
  if (len-- <= 1) return heap.pop();

  var head = heap[0];
  // 将最后一个元素放到堆顶
  heap[0] = heap.pop();

  var curr = 0;
  var left, right;
  var compareFn = this.compareFn;
  // 当前节点大于子节点时，交换节点
  // 子节点大于当前节点，或到达叶子节点时停止
  while (1) {
    left = (curr << 1) + 1;
    // 子节点下标超出队列长度，即已到达叶子结点
    if (left >= len) break;
    right = (curr + 1) << 1;
    // 寻找最小的子节点进行比较
    if (right < len && compareFn(heap[left], heap[right]) > 0) left = right;
    if (compareFn(heap[curr], heap[left]) <= 0) break;
    [heap[curr], heap[left]] = [heap[left], heap[curr]];
    curr = left;
  }

  return head;
};

module.exports = smallestRange;
