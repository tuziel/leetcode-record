/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  var head = this.head = new ListNode('head');
  head.next = head.prev = head;

  this.capacity = capacity;
  this.cache = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  var node = this.cache[key];
  if (node === undefined) return -1;

  this.remove(node);
  this.add(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  var head = this.head;
  var node = this.cache[key];

  if (node) {
    node.val = value;
    this.remove(node);
  } else {
    if (this.capacity === 0) {
      delete this.cache[head.prev.key];
      this.remove(head.prev);
    } else {
      this.capacity--;
    }
    node = new ListNode(key, value);
    this.cache[key] = node;
  }
  this.add(node);
};

LRUCache.prototype.add = function (node) {
  var head = this.head;
  node.prev = head;
  node.next = head.next;
  head.next.prev = node;
  head.next = node;
};

LRUCache.prototype.remove = function (node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;
};

function ListNode(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache;
