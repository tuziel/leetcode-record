/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  var result = [first];

  var prev = first;
  for (var n of encoded) result.push(prev ^= n);

  return result;
};

module.exports = decode;
