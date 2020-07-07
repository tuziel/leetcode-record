/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k === 0) return [];
  if (shorter === longer) return [shorter * k];

  var i = k + 1;
  var res = new Array(i);

  while (i--) res[i] = shorter * (k - i) + longer * i;

  return res;
};

module.exports = divingBoard;
