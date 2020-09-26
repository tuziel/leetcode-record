const process = require('process');
const expect = require('chai').expect;

const MyStack = require('.');
const title = '225. 用队列实现栈';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input[0])}
            ${JSON.stringify(input[1])}
      输出: ${JSON.stringify(output)}`;

const samples = [
  {
    input: [
      ['MyStack', 'push', 'push', 'top', 'pop', 'empty'],
      [[], [1], [2], [], [], []],
    ],
    output: [null, null, null, 2, 2, false],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(exec(i.input)).to.deep.equal(i.output);
    });
  }
});

function exec(input) {
  const [cmds, args] = input;
  let stack;

  return cmds.map((cmd, index) => {
    const arg = args[index];

    if (index === 0) {
      if (cmd === 'MyStack') stack = new MyStack(...arg);
      else throw new Error('The first input method name is not Constructor name');
      return null;

    } else {
      switch (cmd) {
        case 'push': {
          stack[cmd](...arg);
          return null;
        }
        case 'pop':
        case 'top':
        case 'empty': {
          return stack[cmd](...arg);
        }
        default: {
          throw new Error('input method does not exist');
        }
      }
    }
  });
}
