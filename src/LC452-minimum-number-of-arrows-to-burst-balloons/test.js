const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '452. 用最少数量的箭引爆气球';
const tepmlate = ({ input, output }) =>
  `输入: ${slice64(input)}
      输出: ${slice64(output)}`;

const samples = [
  {
    input: [[1, 2], [2, 3], [3, 4], [4, 5]],
    output: 2,
  },
  {
    input: [[10, 16], [2, 8], [1, 6], [7, 12]],
    output: 2,
  },
  {
    input: [[10, 16], [2, 8], [1, 6], [2, 6], [7, 12]],
    output: 2,
  },
  {
    input: [[1, 2], [3, 4], [5, 6], [7, 8]],
    output: 4,
  },
  {
    input: [[1, 2]],
    output: 1,
  },
  {
    input: [[2, 3], [2, 3]],
    output: 1,
  },
  {
    input: [[-2147483648, 2147483647]],
    output: 1,
  },
  {
    input: [[9, 12], [1, 10], [4, 11], [8, 12], [3, 9], [6, 9], [6, 7]],
    output: 2,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
