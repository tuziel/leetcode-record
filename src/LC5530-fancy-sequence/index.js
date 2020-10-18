var Fancy = function () {
  this.list = [];
  this.cmds = [];
};

/**
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function (val) {
  this.list.push(val);
};

/**
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function (inc) {
  this.cmds.push(['a', this.list.length, inc]);
};

/**
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function (m) {
  this.cmds.push(['m', this.list.length, m]);
};

/**
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function (idx) {
  if (idx >= this.list.length) return -1;
  return this.cmds.reduce((ans, [type, len, n]) => {
    if (idx >= len) return ans;

    if (type === 'a') ans += n;
    else if (type === 'm') ans *= n;
    return ans % 1000000007;
  }, this.list[idx]);
};

/**
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */

module.exports = Fancy;
