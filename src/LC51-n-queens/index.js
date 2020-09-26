/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  var res = [];
  var status = new Array(n).fill(0);
  var statusL = new Array(n).fill(0);
  var statusR = new Array(n).fill(0);

  function backtrack(deep) {
    if (deep > n) {
      res.push(status.slice());
      return;
    }

    var l = statusL.shift();
    statusL.push(0);
    var r = statusR.pop();
    statusR.unshift(0);

    for (var index = 0; index < n; index++) {
      if (status[index]) continue;
      if (statusL[index]) continue;
      if (statusR[index]) continue;

      status[index] = deep;
      statusL[index] = 1;
      statusR[index] = 1;

      backtrack(deep + 1);

      status[index] = 0;
      statusL[index] = 0;
      statusR[index] = 0;
    }

    statusL.pop();
    statusL.unshift(l);
    statusR.shift();
    statusR.push(r);
  }

  backtrack(1);
  return res.map((s) => s.map((l) => {
    var line = new Array(n).fill('.');
    line[l - 1] = 'Q';
    return line.join('');
  }));
};

module.exports = solveNQueens;
