/* global describe it */
const process = require('process');
const expect = require('chai').expect;
const { ListNode, createList } = require('../utils');
global.ListNode = ListNode;

const func = require('.');
const title = '2. 两数相加';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input[0])}
            ${JSON.stringify(input[1])}
      输出: ${JSON.stringify(output)}`;

const samples = [
  {
    input: [
      [2, 4, 3],
      [5, 6, 4],
    ],
    output: [7, 0, 8],
  },
  {
    input: [
      [1, 8],
      [0],
    ],
    output: [1, 8],
  },
  {
    input: [
      [5],
      [5],
    ],
    output: [0, 1],
  },
  {
    input: [
      [1],
      [9, 9],
    ],
    output: [0, 0, 1],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input.map(createList))).to.deep.equal(createList(i.output));
    });
  }
});
