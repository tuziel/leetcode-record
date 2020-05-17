/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  var molecule, denominator;
  var res = [];

  for (denominator = 2; denominator <= n; denominator++)
    for (molecule = 1; molecule < denominator; molecule++)
      if (gcd(molecule, denominator) === 1)
        res.push(`${molecule}/${denominator}`);

  return res;
};

function gcd(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

module.exports = simplifiedFractions;
