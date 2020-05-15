/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '994. 腐烂的橘子';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input)}; 输出: ${output}`;

const samples = [
  { input: [[2, 1, 1], [1, 1, 0], [0, 1, 1]], output: 4 },
  { input: [[2, 1, 1], [0, 1, 1], [1, 0, 1]], output: -1 },
  { input: [[0, 2]], output: 0 },
  { input: [[0, 1]], output: -1 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
