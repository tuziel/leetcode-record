/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  // 0  +  .  e  ' '
  var dfa = [
    [3, 2, 4, 0, 1],  // 0: ^
    [3, 2, 4, 0, 1],  // 1:
    [3, 0, 4, 0, 0],  // 2: +
    [3, 0, 5, 7, 10], // 3: 0-9
    [6, 0, 0, 0, 0],  // 4: .
    [6, 0, 0, 7, 10], // 5: .
    [6, 0, 0, 7, 10], // 6: 0-9
    [9, 8, 0, 0, 0],  // 7: Ee
    [9, 0, 0, 0, 0],  // 8: +
    [9, 0, 0, 0, 10], // 9: 0-9
    [0, 0, 0, 0, 10], // 10
  ];

  var status = 0;
  for (var i = 0, l = s.length; i < l; i++) {
    status = dfa[status][getSign(s[i])];
    if (!status) return false;
  }

  return dfa[status][4] === 10;
};

function getSign(char) {
  return ({
    '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0,
    '+': 1, '-': 1,
    '.': 2,
    'E': 3, 'e': 3,
    ' ': 4,
  })[char];
}

module.exports = isNumber;
