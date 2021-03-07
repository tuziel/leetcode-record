const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '726. 原子的数量';
const tepmlate = ({ input, output }) =>
  `输入: ${slice64(input)}
      输出: ${slice64(output)}`;

const samples = [
  {
    input: 'Mg(H2O)N',
    output: 'H2MgNO',
  },
  {
    input: 'H2O',
    output: 'H2O',
  },
  {
    input: 'Mg(OH)2',
    output: 'H2MgO2',
  },
  {
    input: 'K4(ON(SO3)2)2',
    output: 'K4N2O14S4',
  },
  {
    input: 'Be32',
    output: 'Be32',
  },
  {
    input: 'O',
    output: 'O',
  },
  {
    input: 'O123',
    output: 'O123',
  },
  {
    input: 'Asasasasasa123',
    output: 'Asasasasasa123',
  },

];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
