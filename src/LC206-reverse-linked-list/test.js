/* global describe it */
const process = require('process');
const expect = require('chai').expect;
const { createList } = require('../utils');

const func = require('.');
const title = '206. 反转链表';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input)}
      输出: ${JSON.stringify(output)}`;

const samples = [
  { input: [1, 2, 3, 4, 5], output: [5, 4, 3, 2, 1], },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(createList(i.input))).to.deep.equal(createList(i.output));
    });
  }
});
