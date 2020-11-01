/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  var rows = heights.length;
  var cols = heights[0].length;

  var max = 0;
  var pq = new PriorityQueue(([v1], [v2]) => v1 - v2);
  pq.push([0, 0, 0]);

  var traversed = [];
  while (pq.length()) {
    var [v, r, c] = pq.pop();
    var key = (r << 7) + c;
    if (traversed[key]) continue;
    traversed[key] = 1;
    if (v > max) max = v;

    if (r === rows - 1 && c === cols - 1) return max;
    if (r > 0) pq.push([Math.abs(Math.abs(heights[r - 1][c] - heights[r][c])), r - 1, c]);
    if (c > 0) pq.push([Math.abs(Math.abs(heights[r][c - 1] - heights[r][c])), r, c - 1]);
    if (r < rows - 1) pq.push([Math.abs(Math.abs(heights[r + 1][c] - heights[r][c])), r + 1, c]);
    if (c < cols - 1) pq.push([Math.abs(Math.abs(heights[r][c + 1] - heights[r][c])), r, c + 1]);
  }

  return 0;
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

module.exports = minimumEffortPath;
