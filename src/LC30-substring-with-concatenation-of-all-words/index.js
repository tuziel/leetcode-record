/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const map = new Map();
  const freq = [];
  for (const word of words) {
    if (!map.has(word)) map.set(word, map.size);
    const id = map.get(word);
    freq[id] = -~freq[id];
  }

  const requests = words.length;
  const size = words[0].length;
  const total = requests * size;
  const len = s.length;
  const result = [];
  for (let offset = 0; offset < size; offset++) {
    if (offset + total > len) break;
    const counter = new Array(freq.length).fill(0);
    let [left, right, acc] = [offset, offset, 0];
    while (right < len) {
      const wordR = s.slice(right, right += size);
      if (map.has(wordR)) {
        const id = map.get(wordR);
        if (++counter[id] <= freq[id]) acc++;
      }

      if (left + total < right) {
        const wordL = s.slice(left, left += size);
        if (map.has(wordL)) {
          const id = map.get(wordL);
          if (--counter[id] < freq[id]) acc--;
        }
      }

      if (acc === requests) result.push(left);
    }
  }

  return result;
};

module.exports = findSubstring;
