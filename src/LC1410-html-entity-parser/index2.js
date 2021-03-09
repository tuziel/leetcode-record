/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
  return text.replace(/&(quot|apos|amp|gt|lt|frasl);/g, (_, key) => ({
    quot: '"', apos: '\'', amp: '&', gt: '>', lt: '<', frasl: '/',
  })[key]);
};

module.exports = entityParser;
