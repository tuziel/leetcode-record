/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '221. 最大正方形';
const tepmlate = ({ input, output }) =>
  `输入:
            ${input.map((row) => row.join(' ')).join('\n            ')}
      输出: ${output}`;

const samples = [
  {
    input: [
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0']
    ],
    output: 4,
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
