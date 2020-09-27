/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  return logs.reduce((deep, path) => {
    if (path === './') return deep;
    if (path === '../') return Math.max(0, deep - 1);
    else return deep + 1;
  }, 0);
};

module.exports = minOperations;
