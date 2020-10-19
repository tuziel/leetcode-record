const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = 'LCP 19. 秋叶收藏集';
const tepmlate = ({ input, output }) =>
  `输入: ${slice64(input)}
      输出: ${output}`;

const samples = [
  { input: 'ryr', output: 0 },
  { input: 'yry', output: 3 },
  { input: 'rryrrrryrrryryrryryr', output: 5 },
  { input: 'yyrrrrrryryryrrryyyr', output: 5 },
  { input: 'yyyyyryrryrrrrryryrr', output: 5 },
  { input: 'yryrrrrrryyyyyryrryr', output: 4 },
  { input: 'yryrrryyryyrrrryrrrr', output: 4 },
  { input: 'ryyyrrryryrryyyryyyr', output: 6 },
  { input: 'rrryyyryyyyryyyrrryy', output: 4 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
