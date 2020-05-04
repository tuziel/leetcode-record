/* global describe it */
const process = require('process');
const expect = require('chai').expect;
const cuttingRope = require('.');

const tepmlate = ({ input, output }) =>
  `输入：${input}; 输出：${output}`;

const samples = [
  { input: 58, output: 549681949, },
  { input: 100, output: 703522804, },
  { input: 512, output: 337299684, },
  { input: 1000, output: 620946522, },
];

describe('面试题14- II. 剪绳子 II', function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(cuttingRope(i.input)).to.be.equal(i.output);
    });
  }
});
