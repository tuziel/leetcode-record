/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  var stackR = [sr];
  var stackC = [sc];
  var oldColor = image[sr][sc];
  if (oldColor === newColor) return image;

  var r, c, t;
  while (stackR.length) {
    r = stackR.pop();
    c = stackC.pop();
    t = image[r];

    if (t === undefined) continue;
    if (t[c] !== oldColor) continue;

    t[c] = newColor;
    // up
    stackR.push(r - 1);
    stackC.push(c);
    // right
    stackR.push(r);
    stackC.push(c + 1);
    // down
    stackR.push(r + 1);
    stackC.push(c);
    // left
    stackR.push(r);
    stackC.push(c - 1);
  }

  return image;
};

module.exports = floodFill;
