const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '30. 串联所有单词的子串';
const tepmlate = ({ input: [s, words], output }) => {
  return `输入: nums = ${slice64(s)}
            target = ${slice64(words)}
      输出: ${output}`;
};

const samples = [
  {
    input: [
      'aaa',
      ['a', 'a'],
    ],
    output: [0, 1],
  },
  {
    input: [
      'assaassaassaaassaasddsaasddsaassaassa',
      ['as', 'sa'],
    ],
    output: [0, 2, 4, 6, 8, 13, 15, 21, 27, 29, 31, 33],
  },
  {
    input: [
      'barfoothefoobarman',
      ['foo', 'bar'],
    ],
    output: [0, 9],
  },
  {
    input: [
      'wordgoodgoodgoodbestword',
      ['word', 'good', 'best', 'word'],
    ],
    output: [],
  },
  {
    input: [
      'barfoofoobarthefoobarman',
      ['bar', 'foo', 'the'],
    ],
    output: [6, 9, 12],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.have.members(i.output);
    });
  }
});
