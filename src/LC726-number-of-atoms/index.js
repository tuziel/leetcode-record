/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  var stack = [];
  var times = 1;
  var atoms = [];
  var freqAtoms = {};

  var right = formula.length - 1;
  while (right >= 0) {
    var sign = getPrevSign(formula, right);

    if (sign === ')') {
      if (isNaN(formula[right + 1])) stack.push(1);
    } else if (sign === '(') {
      times /= stack.pop();
    } else if (/\d/.test(sign)) {
      stack.push(+sign);
      times *= +sign;
    } else {
      if (isNaN(formula[right + 1])) stack.push(1);
      if (!freqAtoms[sign]) {
        atoms.push(sign);
        freqAtoms[sign] = 0;
      }
      freqAtoms[sign] += times;
      times /= stack.pop();
    }

    right -= sign.length;
  }

  return atoms.sort().map((atom) => freqAtoms[atom] === 1 ? atom : atom + freqAtoms[atom]).join('');
};

function getPrevSign(formula, index) {
  var char = formula[index];

  if (/\d/.test(char)) {
    while (/\d/.test(formula[--index])) {
      char = formula[index] + char;
    }
    return char;
  }

  if (/[a-z]/.test(char)) {
    while (/[a-z]/.test(formula[--index])) {
      char = formula[index] + char;
    }
    if (/[A-Z]/.test(formula[index])) {
      char = formula[index] + char;
    }
  }

  return char;
}

module.exports = countOfAtoms;
