/* global describe it */
const process = require('process');
const expect = require('chai').expect;

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
      expect(func.apply(null, input)).to.be.equal(output);
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

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function createTree(values) {
  const len = values.length;
  const nodes = [];
  const left = (x) => (x << 1) + 1;
  const right = (x) => (x + 1 << 1);
  for (let i = len; i--;) {
    if (values[i] == null) {
      nodes[i] = null;
    } else {
      const node = nodes[i] = new TreeNode(values[i]);
      if (left(i) < len) node.left = nodes[left(i)];
      if (right(i) < len) node.right = nodes[right(i)];
    }
  }
  return nodes[0];
}
