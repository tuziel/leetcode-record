var FrontMiddleBackQueue = function () {
  this.head = new ListNode();
  this.middle = null;
  this.back = null;
  this.length = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  var node = new ListNode(val);
  if (this.length === 0) {
    this.head.next = this.middle = this.back = node;
    node.prev = this.head;
  } else {
    node.next = this.head.next;
    node.prev = this.head;
    node.next.prev = node;
    node.prev.next = node;
    // 奇数+
    if (this.length % 2 === 1) this.middle = this.middle.prev;
  }
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  var node = new ListNode(val);
  if (this.length === 0) {
    this.head.next = this.middle = this.back = node;
    node.prev = this.head;
  } else {
    if (this.length % 2 === 1) {
      // 奇数+
      node.next = this.middle;
      node.prev = this.middle.prev;
    } else {
      // 偶数+
      node.next = this.middle.next;
      node.prev = this.middle;
    }
    node.next.prev = node;
    node.prev.next = node;
    this.middle = node;
  }
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  var node = new ListNode(val);
  if (this.length === 0) {
    this.head.next = this.middle = this.back = node;
    node.prev = this.head;
  } else {
    node.prev = this.back;
    node.prev.next = node;
    this.back = node;

    // 偶数+
    if (this.length % 2 === 0) this.middle = this.middle.next;
  }
  this.length++;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.length === 0) return -1;
  var head = this.head;
  var node = head.next;
  if (this.length === 1) {
    head.next = this.middle = this.back = null;
  } else {
    head.next = node.next;
    head.next.prev = head;
    // 偶数-
    if (this.length % 2 === 0) this.middle = this.middle.next;
  }
  this.length--;
  return node.val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.length === 0) return -1;
  var node = this.middle;
  if (this.length === 1) {
    this.head.next = this.middle = this.back = null;
  } else {
    if (this.length % 2 === 1) {
      // 奇数-
      this.middle = node.prev;
    } else {
      // 偶数-
      this.middle = node.next;
    }
    var prev = node.prev;
    node.prev.next = node.next;
    node.next.prev = prev;
  }
  this.length--;
  return node.val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.length === 0) return -1;
  var node = this.back;
  if (this.length === 1) {
    this.head.next = this.middle = this.back = null;
  } else {
    // 奇数-
    if (this.length % 2 === 1) this.middle = this.middle.prev;

    this.back = node.prev;
    this.back.next = null;
  }
  this.length--;
  return node.val;
};

function ListNode(val) {
  this.val = val;
  this.prev = this.next = null;
}

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
