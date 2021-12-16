/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const values1 = version1.split(/\.0*(?=\d)/).map((v) => +v);
  const values2 = version2.split(/\.0*(?=\d)/).map((v) => +v);

  const len = Math.max(values1.length, values2.length);
  for (let i = 0; i < len; i++) {
    const a = values1[i] || 0;
    const b = values2[i] || 0;
    if (a < b) return -1;
    if (a > b) return 1;
  }

  return 0;
};

module.exports = compareVersion;
