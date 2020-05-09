/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '514. 自由之路';
const tepmlate = ({ input, output }) =>
  `输入: ${input[0]}
            ${input[1]}
      输出: ${output}`;

const samples = [
  {
    input: [
      'a',
      'a'
    ],
    output: 1,
  },
  {
    input: [
      'aaaaa',
      'aaaaa'
    ],
    output: 5,
  },
  {
    input: [
      'godding',
      'gd'
    ],
    output: 4,
  },
  {
    input: [
      'iotfo',
      'fioot'
    ],
    output: 11,
  },
  {
    input: [
      'axxxxxxxxxxxbcdexdxbxcxa',
      'edcba'
    ],
    output: 26,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.equal(i.output);
    });
  }
});
