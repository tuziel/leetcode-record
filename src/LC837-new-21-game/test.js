const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '837. 新21点';
const tepmlate = ({ input: [N, K, W], output }) =>
  `输入: N = ${N}, K = ${K}, W = ${W}
      输出: ${output}`;

const samples = [
  { input: [10, 1, 10], output: 1.00000 },
  { input: [6, 1, 10], output: 0.60000 },
  { input: [21, 17, 10], output: 0.73278 },
  { input: [9876, 7654, 5432], output: 0.66135 },
  { input: [8954, 8556, 506], output: 0.95495 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.be.closeTo(i.output, 1e-5);
    });
  }
});
