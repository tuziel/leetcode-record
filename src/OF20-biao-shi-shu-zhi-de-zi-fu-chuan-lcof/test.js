/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '剑指 Offer 20. 表示数值的字符串';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output}`;

const samples = [
  { input: '', output: false },
  { input: ' ', output: false },
  { input: '+100', output: true },
  { input: '5e2', output: true },
  { input: '-123', output: true },
  { input: '3.1416', output: true },
  { input: '-1E-16', output: true },
  { input: '0123', output: true },
  { input: '12e', output: false },
  { input: '1a3.14', output: false },
  { input: '1.2.3', output: false },
  { input: '+-5', output: false },
  { input: '12e+5.4', output: false },
  { input: '1 ', output: true },
  { input: ' 1 ', output: true },
  { input: '1 1', output: false },
  { input: ' 1  ', output: true },
  { input: '3.', output: true },
  { input: '.3', output: true },
  { input: '.', output: false },
  { input: '.1.', output: false },
  { input: ' +.123 ', output: true },
  { input: '46.e3', output: true },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
