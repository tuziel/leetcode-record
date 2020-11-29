var FrontMiddleBackQueue = function () {
  this.list = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.list.unshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  var mid = this.list.length >> 1;
  this.list.splice(mid, 0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.list.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  return this.list.length ? this.list.shift() : -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  var mid = (this.list.length - 1) >> 1;
  return this.list.length ? this.list.splice(mid, 1)[0] : -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  return this.list.length ? this.list.pop() : -1;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */

module.exports = FrontMiddleBackQueue;
