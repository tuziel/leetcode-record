/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minSt = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  var min = this.getMin();
  if (min === null) this.minSt.push(x);
  else if (x <= min) this.minSt.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  var stack = this.stack;
  if (!stack.length) return null;
  var val = this.stack.pop();
  if (this.getMin() === val) this.minSt.pop();
  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  var stack = this.stack;
  return stack.length ? stack[stack.length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  var minSt = this.minSt;
  return minSt.length ? minSt[minSt.length - 1] : null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack;
