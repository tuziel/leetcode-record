/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  return ((coordinates[0].charCodeAt() - 96) & 1) ^ (+coordinates[1] & 1);
};

module.exports = squareIsWhite;
