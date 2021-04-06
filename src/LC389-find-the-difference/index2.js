/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  return String.fromCharCode([].reduce.call(s + t, (res, c) => res ^ c.charCodeAt(), 0));
};

module.exports = findTheDifference;
