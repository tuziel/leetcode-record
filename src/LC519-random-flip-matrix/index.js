/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
var Solution = function (n_rows, n_cols) {
  this.map = new Map();

  // 记录矩阵的大小
  this.rows = n_rows;
  this.cols = n_cols;
  this.size = n_rows * n_cols;

  // 记录还剩多少个元素未抽取，即划分区间的位置
  this.left = this.size;
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function () {
  // 根据剩余数量随机生成下标
  var rand = Math.random() * this.left-- | 0;
  var map = this.map;
  // 如果该下标被交换过，则使用交换后的下标
  var index = map.has(rand) ? map.get(rand) : rand;
  // 将该下标与区间最后一位交换
  map.set(rand, map.has(this.left) ? map.get(this.left) : this.left);
  // 返回该下标对应的坐标
  return [index / this.cols | 0, index % this.cols];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function () {
  this.left = this.size;
  this.map.clear();
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n_rows, n_cols)
 * var param_1 = obj.flip()
 * obj.reset()
 */

module.exports = Solution;
