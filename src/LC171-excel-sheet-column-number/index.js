/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let res = 0;
  for (let [i, w] = [columnTitle.length, 1]; i--; w *= 26) {
    res += (columnTitle[i].charCodeAt() - 64) * w;
  }
  return res;
};

module.exports = titleToNumber;
