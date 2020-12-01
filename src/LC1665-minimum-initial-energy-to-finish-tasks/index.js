/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function (tasks) {
  return tasks
    .sort(([a1, m1], [a2, m2]) => (m1 - a1) - (m2 - a2))
    .reduce((energy, [actual, minimum]) => {
      energy += actual;
      if (minimum > energy) energy = minimum;
      return energy;
    }, 0);
};

module.exports = minimumEffort;
