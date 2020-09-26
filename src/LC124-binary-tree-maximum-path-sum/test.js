const process = require('process');
const expect = require('chai').expect;
const { createTree } = require('../utils');

const func = require('.');
const title = '124. 二叉树中的最大路径和';
const tepmlate = ({ input, output }) =>
  `输入: ${((i) => `${i.slice(0, 64)}${i.length > 64 ? '...' : ''}`)(JSON.stringify(input))}
      输出: ${output}`;

const samples = [
  {
    input: [1, 2, 3],
    output: 6,
  },
  {
    input: [-10, 9, 20, null, null, 15, 7],
    output: 42,
  },
  {
    input: [-3],
    output: -3,
  },
  {
    input: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
    output: 48,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(createTree(i.input))).to.equal(i.output);
    });
  }
});
