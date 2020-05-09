/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
  this.keyMap = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  var list = this.keyMap[key] || (this.keyMap[key] = []);
  list.push({ value, timestamp });
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  var list = this.keyMap[key];
  if (!list) return '';
  if (timestamp < list[0].timestamp) return '';

  var end = list.length - 1;
  var left = 0;
  var right = end;
  var mid;

  while (left <= right) {
    mid = (left + right) >> 1;
    if (list[mid].timestamp <= timestamp) left = mid + 1;
    else right = mid - 1;
  }

  if (list[mid].timestamp > timestamp) mid--;
  return list[mid].value || '';
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

module.exports = TimeMap;
