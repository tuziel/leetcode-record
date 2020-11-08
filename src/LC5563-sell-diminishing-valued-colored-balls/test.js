const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '';
const tepmlate = ({ input, output }) =>
  `输入: ${slice64(input)}
      输出: ${slice64(output)}`;

const samples = [
  {
    input: [
      [2, 5],
      4,
    ], output: 14,
  },
  {
    input: [
      [3, 5],
      6,
    ], output: 19,
  },
  {
    input: [
      [2, 8, 4, 10, 6],
      20,
    ], output: 110,
  },
  {
    input: [
      [11, 22, 33, 44, 55],
      100,
    ], output: 2952,
  },
  {
    input: [
      [1000000000],
      1000000000,
    ], output: 21,
  },
  {
    input: [
      [13548, 263478, 76348, 2198, 283764, 67823],
      612783,
    ], output: 413291532,
  },
  {
    input: [
      [773160767],
      252264991,
    ], output: 70267492,
  },
  {
    input: [
      [497978859, 167261111, 483575207, 591815159],
      836556809,
    ], output: 373219333,
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
