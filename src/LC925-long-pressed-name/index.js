/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  var len1 = name.length;
  var len2 = typed.length;
  var i = 0;
  var j = 0;
  var last;

  for (; i < len1; i++) {
    if (name[i] !== typed[j]) {
      while (typed[j] === last) j++;
    }

    if (name[i] === typed[j]) j++;
    else return false;

    last = name[i];
  }

  while (typed[j] === last) j++;

  return j === len2;
};

module.exports = isLongPressedName;
