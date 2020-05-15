/* global describe it */
const process = require('process');
const expect = require('chai').expect;
const { createTree } = require('../utils');

const func = require('.');
const title = '98. 验证二叉搜索树';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input)}; 输出: ${output}`;

const samples = [
  { input: [], output: true },
  { input: [0], output: true },
  { input: [1, 1], output: false },
  { input: [2, 1, 3], output: true },
  { input: [5, 1, 4, null, null, 3, 6], output: false },
  { input: [10, 5, 15, null, null, 6, 20], output: false },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(createTree(i.input))).to.equal(i.output);
    });
  }
});
