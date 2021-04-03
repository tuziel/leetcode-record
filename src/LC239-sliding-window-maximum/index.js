/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  var len = nums.length;
  var map = {};
  var pq = new PriorityQueue((a, b) => b - a);
  var result = [];
  var i, n, last;

  i = 0;
  while (i < k) {
    n = nums[i++];
    map[n] = -~map[n];
    pq.push(n);
  }
  result.push(pq.top());

  while (i < len) {
    last = nums[i - k];
    n = nums[i++];
    map[last]--;
    map[n] = -~map[n];
    pq.push(n);
    while (!map[pq.top()]) pq.pop();
    result.push(pq.top());
  }

  return result;
};

/**
 * 优先队列
 */
function PriorityQueue() {
  this.heap = [];
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

  // 父节点大于当前节点时，交换节点
  // 当前节点大于父节点，或到达栈顶时停止
  while (curr > 0) {
    parent = (curr - 1) >> 1;
    if (heap[curr] <= heap[parent]) break;
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
  // 当前节点大于子节点时，交换节点
  // 子节点大于当前节点，或到达叶子节点时停止
  while (1) {
    left = (curr << 1) + 1;
    // 子节点下标超出队列长度，即已到达叶子结点
    if (left >= len) break;
    right = (curr + 1) << 1;
    // 寻找最小的子节点进行比较
    if (right < len && heap[right] > heap[left]) left = right;
    if (heap[left] <= heap[curr]) break;
    [heap[curr], heap[left]] = [heap[left], heap[curr]];
    curr = left;
  }

  return head;
};

PriorityQueue.prototype.top = function () {
  return this.heap[0];
};

module.exports = maxSlidingWindow;
