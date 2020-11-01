/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  var count = arr.length;
  var map = [];
  arr.forEach((n, i) => map[n] = i);

  for (var i = 0, l = pieces.length; i < l; i++) {
    var piece = pieces[i];
    var start = map[piece[0]];
    if (start === -1) return false;
    for (var j = 0, m = piece.length; j < m; j++) {
      var n = piece[j];
      if (map[n] !== start + j) return false;
      map[n] = -1;
      count--;
    }
  }

  if (count > 0) return false;
  return true;
};

module.exports = canFormArray;
