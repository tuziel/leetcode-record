const process = require('process');
const expect = require('chai').expect;
const { createList } = require('../utils');

const func = require('.');
const title = '25. K 个一组翻转链表';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input[0])}
            ${input[1]}
      输出: ${output}`;

const range_1_15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const samples = [
  {
    input: [range_1_15, 2],
    output: [2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 15],
  },
  {
    input: [range_1_15, 3],
    output: [3, 2, 1, 6, 5, 4, 9, 8, 7, 12, 11, 10, 15, 14, 13],
  },
  {
    input: [range_1_15, 4],
    output: [4, 3, 2, 1, 8, 7, 6, 5, 12, 11, 10, 9, 13, 14, 15],
  },
  {
    input: [range_1_15, 5],
    output: [5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 15, 14, 13, 12, 11],
  },
  {
    input: [range_1_15, 6],
    output: [6, 5, 4, 3, 2, 1, 12, 11, 10, 9, 8, 7, 13, 14, 15],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(createList(i.input[0]), i.input[1])).to.deep.equal(createList(i.output));
    });
  }
});
