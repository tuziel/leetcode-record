var B = BigInt;

function mod(cnt) {
  var m = 1000000007;
  return cnt % m;
}

function BigMod(cnt) {
  var m = B(1000000007);
  while (cnt < 0) cnt += m;
  return cnt % m;
}

function div(cnts1, cnts2) {
  return cnts1.reduce((ans, ctn, i) => {
    var diff = ctn - (cnts2[i] | 0);
    while (diff--) ans = mod(ans * i);
    return ans;
  }, 1);
}

var Fancy = function () {
  this.list = [];
  this.a = [0];
  this.m = [[]];
};

/**
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function (val) {
  var i = this.list.length;
  this.list.push(val);
  this.a.push(this.a[i]);
  this.m.push(this.m[i].slice());
};

/**
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function (inc) {
  var i = this.list.length;
  if (!i) return;
  this.a[i] += inc;
};

/**
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function (m) {
  var i = this.list.length;
  if (!i) return;
  this.m[i][m] = (this.m[i][m] | 0) + 1;
  this.a[i] = mod(this.a[i] * m);
};

/**
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function (idx) {
  if (idx >= this.list.length) return -1;
  var i = this.list.length;
  var dm = B(div(this.m[i], this.m[idx]));
  var da = BigMod(B(this.a[i]) - BigMod(B(this.a[idx]) * dm));
  return parseInt(BigMod(B(this.list[idx]) * dm + da));
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
