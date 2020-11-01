const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '140. 单词拆分 II';
const tepmlate = ({ input: [s, wordDict], output }) =>
  `输入: s = ${slice64(s)}
        wordDict = ${slice64(wordDict)}
      输出: ${slice64(output)}`;

const samples = [
  {
    input: [
      'catsanddog',
      ['cat', 'cats', 'and', 'sand', 'dog'],
    ],
    output: ['cats and dog', 'cat sand dog'],
  },
  {
    input: [
      'pineapplepenapple',
      ['apple', 'pen', 'applepen', 'pine', 'pineapple'],
    ],
    output: ['pine apple pen apple', 'pineapple pen apple', 'pine applepen apple'],
  },
  {
    input: [
      'catsandog',
      ['cats', 'dog', 'sand', 'and', 'cat'],
    ],
    output: [],
  },
  {
    input: [
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'],
    ],
    output: [],
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
