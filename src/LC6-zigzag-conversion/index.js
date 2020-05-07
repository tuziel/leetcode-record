/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const result = [];
  const chars = s.split('');
  const length = chars.length;
  const end = numRows - 1;
  const block = end * 2;
  const maxBlock = block ? Math.ceil(length / block) : 1;


  for (let r = 0; r <= end; r++) {
    for (let b = 0; b < maxBlock;) {
      const t = b++ * block;
      result.push(chars[t + r]);
      if (r !== 0 && r !== end) {
        result.push(chars[t + block - r]);
      }
    }
  }

  return result.join('');
};

module.exports = convert;
