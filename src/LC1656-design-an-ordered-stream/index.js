/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.value = [null];
  this.ptr = 1;
};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (id, value) {
  this.value[id] = value;
  if (!this.value[this.ptr]) return [];

  var start = this.ptr;
  while (this.value[this.ptr]) this.ptr++;
  return this.value.slice(start, this.ptr);
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */

module.exports = OrderedStream;
