/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  if (n === 0) return 0;
  var squares = [];

  var i, j;
  for (i = 1; (j = i * i) <= n; i++) {
    if (j === n) return 1;
    squares.push(j);
  }

  var dp = squares;
  var res = 2;
  while (1) {
    var temp = [];
    var record = [];

    for (i = 0; i < dp.length; i++) {
      for (j = 0; j < squares.length; j++) {
        var k = dp[i] + squares[j];
        if (k === n) return res;
        if (record[k]) continue;
        record[k] = 1;
        temp.push(k);
      }
    }

    dp = temp;
    res++;
  }
};

module.exports = numSquares;
