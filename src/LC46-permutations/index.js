/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var col = nums.length;
  if (col <= 1) return [nums];

  var times = factorial(col);
  var result = new Array(times);
  for (var i = times; i--;) result[i] = new Array(col);

  var step = 1;
  var y = -1;
  var x = times * step;
  while (col--) {
    var _t = times;
    var _x = x;
    while (_t--) {
      var _s = step;
      _x -= step;
      if (y < 0) y = col;
      while (_s--) {
        var row = result[_x + _s];
        var _col = -1;
        var z = y + 1;
        while (z--) if (row[++_col] !== undefined) z++;
        row[_col] = nums[col];
      }
      y--;
    }
    step = step * (col + 1);
    times = times / (col + 1);
  }

  return result;
};

function factorial(num) {
  return num === 1 ? 1 : factorial(num - 1) * num;
}

module.exports = permute;
