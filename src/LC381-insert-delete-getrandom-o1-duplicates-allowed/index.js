/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.list = [];
  this.map = {};
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  var node = new Node(val);
  node.index = this.list.length;
  this.list.push(node);
  (this.map[val] || (this.map[val] = [])).push(node);
  return this.map[val].length === 1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  var tars = this.map[val];
  if (!tars || !tars.length) return false;
  var tar = tars.pop();

  var list = this.list;
  var last = list.pop();
  if (tar !== last) {
    list[tar.index] = last;
    last.index = tar.index;
  }
  return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  return this.list[(Math.random() * this.list.length) | 0].val;
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

function Node(val) {
  this.val = val;
  this.index = -1;
}

module.exports = RandomizedCollection;
