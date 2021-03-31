const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '68. 文本左右对齐';
const tepmlate = ({ input: [words, maxWidth], output }) =>
  `输入: words = ${slice64(words)}
            maxWidth = ${slice64(maxWidth)}
      输出: ${slice64(output)}`;

const samples = [
  {
    input: [
      ['Listen', 'to', 'many,', 'speak', 'to', 'a', 'few.'],
      6,
    ],
    output: ['Listen', 'to    ', 'many, ', 'speak ', 'to   a', 'few.  '],
  },
  {
    input: [
      ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
      16,
    ],
    output: ['This    is    an', 'example  of text', 'justification.  '],
  },
  {
    input: [
      ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
      16,
    ],
    output: ['What   must   be', 'acknowledgment  ', 'shall be        '],
  },
  {
    input: [
      ['Science', 'is', 'what', 'we', 'understand', 'well', 'enough', 'to', 'explain', 'to', 'a', 'computer.', 'Art', 'is', 'everything', 'else', 'we', 'do'],
      20,
    ],
    output: ['Science  is  what we', 'understand      well', 'enough to explain to', 'a  computer.  Art is', 'everything  else  we', 'do                  '],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.deep.equal(i.output);
    });
  }
});
