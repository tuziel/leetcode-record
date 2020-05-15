/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '面试题14- II. 剪绳子 II';
const tepmlate = ({ input, output }) => `输入: ${input}; 输出: ${output}`;

const samples = [
  { input: 58, output: 549681949 },
  { input: 100, output: 703522804 },
  { input: 512, output: 337299684 },
  { input: 1000, output: 620946522 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
