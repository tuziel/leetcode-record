/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '5457. 和为奇数的子数组数目';
const tepmlate = ({ input, output }) =>
  `输入: ${((i) => `${i.slice(0, 64)}${i.length > 64 ? '...' : ''}`)(JSON.stringify(input))}
      输出: ${output}`;

const samples = [
  { input: [1, 3, 5], output: 4 },
  { input: [2, 4, 6], output: 0 },
  { input: [1, 2, 3, 4, 5, 6, 7], output: 16 },
  { input: [100, 100, 99, 99], output: 4 },
  { input: [7], output: 1 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
