/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
  // var trie = JSON.parse('{"q":{"u":{"o":{"t":"\\""}}},"a":{"p":{"o":{"s":"\'"}},"m":{"p":"&"}},"g":{"t":">"},"l":{"t":"<"},"f":{"r":{"a":{"s":{"l":"/"}}}}}');
  var trie = {
    q: { u: { o: { t: '"' } } },
    a: {
      p: { o: { s: '\'' } },
      m: { p: '&' },
    },
    g: { t: '>' },
    l: { t: '<' },
    f: { r: { a: { s: { l: '/' } } } },
  };

  var chars = text.split('');
  var [left, right] = [0, 0];
  while (right < chars.length) {
    if (chars[right] !== '&') {
      chars[left++] = chars[right++];
      continue;
    }

    var node = trie;
    var i = right;
    while (node) {
      if (chars[++i] === ';') break;
      node = node[chars[i]];
    }

    if (node) {
      chars[left++] = node;
      right = i + 1;
    } else {
      chars[left++] = chars[right++];
    }
  }

  chars.length = left;
  return chars.join('');
};

module.exports = entityParser;
