/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const len = s.length;
  if (len <= 10) return [];

  const setA = new Set();
  const setB = new Set();
  for (let right = 10; right <= len; right++) {
    const sequence = s.slice(right - 10, right);
    if (setA.has(sequence)) setB.add(sequence);
    else setA.add(sequence);
  }

  return [...setB.keys()];
};

module.exports = findRepeatedDnaSequences;
