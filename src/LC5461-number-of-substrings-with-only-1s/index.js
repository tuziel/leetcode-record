/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
  var len = s.length;
  var record = [];
  var flag = 0;
  var i, j;

  for (i = 0, j = 0; i < len; i++) {
    if (s[i] === '0') {
      if (flag) j++;
      flag = 0;
    } else {
      if (flag) record[j]++;
      else record[j] = 1;
      flag = 1;
    }
  }

  return record.reduce((total, item) => total += sum(item), 0) % 1000000007;
};

function sum(n) {
  return n * (n + 1) / 2;
}

module.exports = numSub;
