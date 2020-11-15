const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '402. 移掉K位数字';
const tepmlate = ({ input: [num, k], output }) =>
  `输入: num = ${slice64(num)}
        k = ${slice64(k)}
      输出: ${slice64(output)}`;

const samples = [
  {
    input: [
      '1432219',
      3,
    ],
    output: '1219',
  },
  {
    input: [
      '10200',
      1,
    ],
    output: '200',
  },
  {
    input: [
      '10',
      2,
    ],
    output: '0',
  },
  {
    input: [
      '1234567890',
      9,
    ],
    output: '0',
  },
  {
    input: [
      '112',
      1,
    ],
    output: '11',
  },
  {
    input: [
      '87129343489576',
      7,
    ],
    output: '1233456',
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
