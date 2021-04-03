
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var sqrt = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
  var cache = { 1: 1, 4: 1, 16: 1, 37: 1, 58: 1, 89: 1, 145: 1, 42: 1, 20: 1 };

  function f(x) {
    if (cache[x]) return x === 1;
    var str = `${x}`;
    var i = str.length;
    var sum = 0;
    while (i--) sum += sqrt[str[i]];
    return f(sum);
  }

  return f(n);
};

module.exports = isHappy;
