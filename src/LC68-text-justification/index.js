/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  var slices = [[]];
  var c = 0;

  for (var word of words) {
    if ((c === 0 ? -1 : c + word.length + 1) > maxWidth) {
      slices.push([]);
      c = 0;
    }

    slices[slices.length - 1].push(word);
    if (c === 0) c = -1;
    c += word.length + 1;
  }

  var last = slices.pop().join(' ');
  while (last.length < maxWidth) last += ' ';

  var result = slices.map((lines) => justify(lines, maxWidth));
  result.push(last);
  return result;
};

function justify(words, width) {
  var length = words.reduce((l, w) => l + w.length, 0);
  var diff = Math.max(0, width - length);
  var divide = Math.max(1, words.length - 1);
  var spaces = diff / divide | 0;
  var extra = diff % divide;

  var chars = '';
  for (var i = 0; i < words.length; i++) {
    chars += words[i];
    if (i < divide) {
      chars += new Array(spaces + (extra-- > 0 ? 1 : 0)).fill(' ').join('');
    }
  }

  return chars;
}

module.exports = fullJustify;
