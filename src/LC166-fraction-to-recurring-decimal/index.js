/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  const sign = (numerator < 0) ^ (denominator < 0) ? '-' : '';
  denominator = Math.abs(denominator);
  numerator = Math.abs(numerator);

  const integer = Math.floor(Math.abs(numerator / denominator));
  numerator %= denominator;

  if (numerator === 0) {
    return integer === 0 ? '0' : `${sign}${integer}`;
  }

  const map = new Map();
  const fraction = [];
  while (numerator !== 0) {
    numerator *= 10;
    if (map.has(numerator)) {
      fraction.splice(map.get(numerator), 0, '(');
      fraction.push(')');
      break;
    }

    map.set(numerator, fraction.length);
    fraction.push(Math.floor(Math.abs(numerator / denominator)));
    numerator %= denominator;
  }

  return `${sign}${integer}.${fraction.join('')}`;
};

module.exports = fractionToDecimal;
