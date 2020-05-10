/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '50. Pow(x, n)';
const tepmlate = ({ input, output }) =>
  `输入: Math.pow(${input[0]}, ${input[1]})
      输出: ${output}`;

const samples = [
  { input: [2.00000, 10], output: Math.pow(2.00000, 10), },
  { input: [2.10000, 3], output: Math.pow(2.10000, 3), },
  { input: [2.00000, -2], output: Math.pow(2.00000, -2), },
  { input: [1.00000, -2147483648], output: Math.pow(1.00000, -2147483648), },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.equal(i.output);
    });
  }
});
