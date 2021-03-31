const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '44. 通配符匹配';
const tepmlate = ({ input: [s, p], output }) =>
  `输入: s = ${slice64(s)}
            p = ${slice64(p)}
      输出: ${output}`;

const samples = [
  {
    input: [
      'aa',
      'a',
    ],
    output: false,
  },
  {
    input: [
      'aa',
      '*',
    ],
    output: true,
  },
  {
    input: [
      'cb',
      '?a',
    ],
    output: false,
  },
  {
    input: [
      'adceb',
      '*a*b',
    ],
    output: true,
  },
  {
    input: [
      'acdcb',
      'a*c?b',
    ],
    output: false,
  },
  {
    input: [
      '',
      '',
    ],
    output: true,
  },
  {
    input: [
      '',
      '******',
    ],
    output: true,
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
