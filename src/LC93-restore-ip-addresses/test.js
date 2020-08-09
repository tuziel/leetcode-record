/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '93. 复原IP地址';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${((i) => `${i.slice(0, 64)}${i.length > 64 ? '...' : ''}`)(JSON.stringify(output))}`;

const samples = [
  { input: '', output: [] },
  { input: '255', output: [] },
  { input: '2222', output: ['2.2.2.2'] },
  { input: '22222', output: ['2.2.2.22', '2.2.22.2', '2.22.2.2', '22.2.2.2'] },
  { input: '25525511135', output: ['255.255.11.135', '255.255.111.35'] },
  { input: '02222', output: ['0.2.2.22', '0.2.22.2', '0.22.2.2'] },
  { input: '010010', output: ['0.10.0.10', '0.100.1.0'] },
  { input: '100001', output: ['100.0.0.1'] },
  { input: '0000000000001', output: [] },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.have.members(i.output);
    });
  }
});
