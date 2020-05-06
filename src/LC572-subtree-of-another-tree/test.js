/* global describe it */
const process = require('process');
const expect = require('chai').expect;
const { createTree } = require('../utils');

const func = require('.');
const title = '45. 跳跃游戏 II';
const tepmlate = ({ input, output }) =>
  `输入：${JSON.stringify(input)}; 输出：${output}`;

const samples = [
  {
    input: [
      [],
      [],
    ],
    output: true,
  },
  {
    input: [
      [4, 1, 2],
      [3, 4, 5, 1, 2],
    ],
    output: false,
  },
  {
    input: [
      [3, 4, 5, 1, 2],
      [4, 1, 2],
    ],
    output: true,
  },
  {
    input: [
      [3, 4, 5, 1, 2, null, null, null, 0],
      [4, 1, 2],
    ],
    output: false,
  },
  {
    input: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1],
    ],
    output: true,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input.map((arr) => createTree(arr)))).to.be.equal(i.output);
    });
  }
});
