/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  var len = senate.length;
  var radiant = [];
  var dire = [];

  for (var i = 0; i < len; i++) {
    if (senate[i] === 'R') radiant.push(i);
    else dire.push(i);
  }

  while (1) {
    if (!radiant.length) return 'Dire';
    if (!dire.length) return 'Radiant';

    if (radiant[0] < dire[0]) {
      radiant.push(radiant.shift() + len);
      dire.shift();
    } else {
      dire.push(dire.shift() + len);
      radiant.shift();
    }
  }
};

module.exports = predictPartyVictory;
