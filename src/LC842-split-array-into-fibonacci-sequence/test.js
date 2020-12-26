const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '842. 将数组拆分成斐波那契序列';
const tepmlate = ({ input, output }) =>
  `输入: ${slice64(input)}
      输出: ${slice64(output)}`;

const samples = [
  {
    input: '123456579',
    output: [123, 456, 579],
  },
  {
    input: '11235813',
    output: [1, 1, 2, 3, 5, 8, 13],
  },
  {
    input: '112358130',
    output: [],
  },
  {
    input: '0123',
    output: [],
  },
  {
    input: '1011',
    output: [1, 0, 1, 1],
  },
  {
    input: '1001',
    output: [],
  },
  {
    input: '539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511',
    output: [],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.deep.equal(i.output);
    });
  }
});
