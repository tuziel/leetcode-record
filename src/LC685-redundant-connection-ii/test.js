const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '685. 冗余连接 II';
const tepmlate = ({ input, output }) =>
  `输入: ${slice64(input)}
      输出: ${JSON.stringify(output)}`;

const samples = [
  { input: [[1, 2], [1, 3], [2, 3]], output: [2, 3] },
  { input: [[1, 2], [2, 3], [1, 3]], output: [1, 3] },
  { input: [[1, 2], [3, 2], [2, 1]], output: [1, 2] },
  { input: [[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]], output: [4, 1] },
  { input: [[2, 1], [3, 1], [4, 2], [1, 4]], output: [2, 1] },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.deep.equal(i.output);
    });
  }
});
