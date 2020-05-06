/* global describe it */
const process = require('process');
const expect = require('chai').expect;
const { createTree } = require('./utils');

// XXX: 不知道怎么用 JSDoc 定义 T, P
/**
 * @param {{
 *   type?: 'default'| 'arguments' | 'tree',
 *   func (input: T) => P,
 *   title: string,
 *   tepmlate: (sample: {input: T, output: P}) => string,
 *   samples: Array<{
 *     input: T,
 *     output: P,
 *   }>,
 * }}
 */
module.exports = function ({ type, func, title, tepmlate, samples }) {
  describe(title, function () {
    samples.forEach((sample) => {
      process.send && process.send({ log: tepmlate(sample) });
      it(tepmlate(sample), getExpect(type)(func)(sample));
    });
  });
};

function getExpect(type) {
  switch (type) {
    case 'arguments': {
      return expectArgs;
    }
    case 'tree': {
      return expectTree;
    }
    default: {
      return expectDefault;
    }
  }
}

function expectDefault(func) {
  return function ({ input, output }) {
    return function () {
      expect(func(input)).to.be.equal(output);
    };
  };
}

function expectArgs(func) {
  return function ({ input, output }) {
    return function () {
      expect(func(...input)).to.be.equal(output);
    };
  };
}

function expectTree(func) {
  return function ({ input, output }) {
    return function () {
      expect(func(createTree(input))).to.be.equal(output);
    };
  };
}
