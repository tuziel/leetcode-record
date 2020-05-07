/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var arr = [];

  function insertL(a, l, r) {
    var b = a.slice(0);
    if (l-- > 0) {
      b.push('(');
      insertL(b, l, r);
      insertR(b, l, r);
    }
  }

  function insertR(a, l, r) {
    var b = a.slice(0);
    if (r-- > l) {
      b.push(')');
      insertL(b, l, r);
      insertR(b, l, r);
    } else if (l === 0) {
      arr.push(b.join(''));
    }
  }

  insertL([], n, n);
  insertR([], n, n);

  return arr;
};

module.exports = generateParenthesis;
