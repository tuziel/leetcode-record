/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '5447. 石子游戏 IV';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output}`;

const samples = [
  { input: 1, output: true },
  { input: 2, output: false },
  { input: 3, output: true },
  { input: 4, output: true },
  { input: 7, output: false },
  { input: 8, output: true },
  { input: 17, output: false },
  { input: 1111, output: true },
  { input: 1234, output: true },
  { input: 4567, output: false },
  { input: 8888, output: true },
  { input: 12345, output: true },
  { input: 67890, output: true },
  { input: 98765, output: true },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
