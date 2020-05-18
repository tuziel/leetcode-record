/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  var texts = text.replace(/^./, (c) => c.toLowerCase()).split(' ');
  var len = texts.length;

  function sort() {
    var s = 1;
    var l, r;

    while (s < len) {
      l = 0;
      r = s;
      while (r + s <= len) {
        merge(l, r, r + s);
        r = (l = r + s) + s;
      }
      if (r < len) merge(l, r, len);
      s = s << 1;
    }
  }

  function merge(l, m, r) {
    var a = [];
    var b = [];
    var i, j, k;

    k = l;
    for (i = 0; i < m - l; i++) a[i] = texts[k++];
    k = m;
    for (i = 0; i < r - m; i++) b[i] = texts[k++];

    i = j = 0;
    a[a.length] = b[b.length] = '';
    for (k = l; k < r; k++) {
      if (a[i] !== '' && a[i].length <= b[j].length) {
        texts[k] = a[i++];
      } else if (b[j] === '') {
        texts[k] = a[i++];
      } else {
        texts[k] = b[j++];
      }
    }
  }

  sort();

  return texts.join(' ').replace(/^./, (c) => c.toUpperCase());
};

module.exports = arrangeWords;
