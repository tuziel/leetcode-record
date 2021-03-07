/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  var signs = formula.match(/[A-Z][a-z]*|\d+|[()]/g);
  var stack = [];
  // 当前倍数
  var times = 1;
  // 存放原子名
  var atoms = [];
  // 记录原子数量
  var freq = {};

  var last;
  while (signs.length) {
    var sign = signs.pop();

    if (sign === ')') {
      if (isNaN(last)) stack.push(1);

    } else if (sign === '(') {
      times /= stack.pop();

    } else if (/\d/.test(sign)) {
      stack.push(+sign);
      times *= +sign;

    } else {
      if (isNaN(last)) stack.push(1);
      if (!freq[sign]) {
        atoms.push(sign);
        freq[sign] = 0;
      }
      freq[sign] += times;
      times /= stack.pop();
    }

    last = sign;
  }

  return atoms
    .sort()
    .map((atom) => freq[atom] === 1 ? atom : atom + freq[atom])
    .join('');
};

module.exports = countOfAtoms;
