const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '1014. 最佳观光组合';
const tepmlate = ({ input, output }) =>
  `输入: ${slice64(input)}
      输出: ${output}`;

const samples = [
  {
    input: [8, 1, 5, 2, 6],
    output: 11,
  },
  {
    input: [4, 4, 3, 3, 2, 0, 2, 1, 4, 4, 4, 1, 3, 3, 2, 0, 0, 1, 0, 2, 0, 4, 4, 3, 1, 1, 4, 3, 4, 2, 0, 0, 3, 1, 0, 1, 4, 2, 2, 3, 2, 0, 0, 0, 2, 2, 1, 4, 3, 0, 3, 0, 2, 4, 4, 4, 4, 2, 3, 1, 4, 1, 4, 2, 3, 1, 2, 0, 0, 3, 2, 4, 3, 0, 2, 4, 3, 0, 1, 2, 4, 1, 4, 1],
    output: 7,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
