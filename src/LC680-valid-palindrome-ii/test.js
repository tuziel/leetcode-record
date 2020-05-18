/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '680. 验证回文字符串 Ⅱ';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output}`;

const samples = [
  { input: '', output: true },
  { input: 'a', output: true },
  { input: 'aba', output: true },
  { input: 'abc', output: false },
  { input: 'abca', output: true },
  { input: 'abcca', output: true },
  { input: 'abcc', output: false },
  { input: 'abca', output: true },
  { input: 'asdggdsas', output: true },
  { input: 'ansukdji', output: false },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
