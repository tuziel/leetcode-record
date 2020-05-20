/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '5. 最长回文子串';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output.join(',')}`;

const samples = [
  {
    input: '',
    output: [''],
  },
  {
    input: 'a',
    output: ['a'],
  },
  {
    input: 'ab',
    output: ['a', 'b'],
  },
  {
    input: 'babad',
    output: ['bab', 'aba'],
  },
  {
    input: 'cbbd',
    output: ['bb'],
  },
  {
    input: 'aaaaaaax',
    output: ['aaaaaaa'],
  },
  {
    input: 'abcdcdcbaa',
    output: ['abcdcdcba'],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.be.oneOf(i.output);
    });
  }
});
