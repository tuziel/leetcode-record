/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.perfix = new Array(nums.length + 1);
  this.perfix[0] = 0;
  for (var i = 0; i < nums.length; i++) {
    this.perfix[i + 1] = this.perfix[i] + nums[i];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.perfix[j + 1] - this.perfix[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

module.exports = NumArray;
