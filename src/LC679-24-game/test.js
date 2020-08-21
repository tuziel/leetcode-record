/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '679. 24 点游戏';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input)}, 输出: ${output}`;

const samples = [
  { input: [4, 1, 8, 7], output: true },
  { input: [1, 2, 1, 2], output: false },
  { input: [1, 5, 9, 1], output: false },
  { input: [1, 3, 4, 6], output: true },
  { input: [1, 9, 1, 2], output: true },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
