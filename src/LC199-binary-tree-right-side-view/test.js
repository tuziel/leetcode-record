/* global describe it */
const process = require('process');
const expect = require('chai').expect;
const { createTree } = require('../utils');

const func = require('.');
const title = '199. 二叉树的右视图';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input)}
      输出: ${JSON.stringify(output)}`;

const samples = [
  {
    input: [],
    output: [],
  },
  {
    input: [1, 2, 3, null, 5, null, 4],
    output: [1, 3, 4],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(createTree(i.input))).to.deep.equal(i.output);
    });
  }
});
