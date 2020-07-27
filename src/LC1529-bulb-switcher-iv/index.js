/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  var end = target.length - 1;
  var last = '';
  var res = 0;

  for (var i = 0; i < end; i++) {
    if (target[i] === '1' && last !== '1') res += 2;
    last = target[i];
  }

  if (target[i] === '1') res += last === '1' ? -1 : 1;

  return res;
};

module.exports = minFlips;
