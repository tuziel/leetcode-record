/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  var end = letters.length - 1;
  var left = 0;
  var right = end;
  var mid;

  if (letters[end] <= target) return letters[0];

  while (left <= right) {
    mid = (left + right) >> 1;
    if (letters[mid] <= target) left = mid + 1;
    else right = mid - 1;
  }

  if (letters[mid] <= target) mid++;
  return letters[mid];
};

module.exports = nextGreatestLetter;
