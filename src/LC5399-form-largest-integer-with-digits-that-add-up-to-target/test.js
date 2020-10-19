const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '5399. 数位成本和为目标值的最大数字';
const tepmlate = ({ input: [cost, target], output }) =>
  `输入: cost = ${slice64(cost)}
            target = ${target}
      输出: ${slice64(output)}`;

const samples = [
  {
    input: [[70, 84, 55, 63, 74, 44, 27, 76, 34], 659],
    output: '99977777777777777777776',
  },
  {
    input: [[2, 4, 2, 5, 3, 2, 5, 5, 4], 739],
    output: '666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666665',
  },
  {
    input: [[6, 10, 15, 40, 40, 40, 40, 40, 40], 47],
    output: '32211',
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.equal(i.output);
    });
  }
});
