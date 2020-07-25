/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '5458. 字符串的好分割数目';
const tepmlate = ({ input, output }) =>
  `输入: ${input.slice(0, 64)}${input.length > 64 ? '...' : ''}
      输出: ${output}`;

const samples = [
  { input: 'aacaba', output: 2 },
  { input: 'abcd', output: 1 },
  { input: 'aaaaa', output: 4 },
  { input: 'acbadbaada', output: 2 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
