/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '面试题14- I. 剪绳子';
const tepmlate = ({ input, output }) => `输入: ${input}; 输出: ${output}`;

const samples = [
  { input: 2, output: 1, },
  { input: 3, output: 2, },
  { input: 4, output: 4, },
  { input: 5, output: 6, },
  { input: 10, output: 36, },
  { input: 16, output: 324, },
  { input: 58, output: 1549681956, },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.be.equal(i.output);
    });
  }
});
