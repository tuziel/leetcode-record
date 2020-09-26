const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '238. 除自身以外数组的乘积';
const tepmlate = ({ input, output }) =>
  `输入: ${((a) => `${a.slice(0, 64)}${a.length > 64 ? '...' : ''}`)(JSON.stringify(input))}
      输出: ${((a) => `${a.slice(0, 64)}${a.length > 64 ? '...' : ''}`)(JSON.stringify(output))}`;

const samples = [
  { input: [0, 0], output: [0, 0] },
  { input: [0, 1], output: [1, 0] },
  { input: [1, 0], output: [0, 1] },
  { input: [2, 1], output: [1, 2] },
  { input: [0, 0, 1], output: [0, 0, 0] },
  { input: [0, 1, 1], output: [1, 0, 0] },
  { input: [1, 1, 0], output: [0, 0, 1] },
  { input: [1, -1], output: [-1, 1] },
  { input: [-1, -1], output: [-1, -1] },
  { input: [-1, -1, -1], output: [1, 1, 1] },
  { input: [1, 2, 3, 4], output: [24, 12, 8, 6] },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.deep.equal(i.output);
    });
  }
});
