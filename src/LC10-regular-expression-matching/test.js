const task = require('../task');

task({
  type: 'arguments',
  func: require('.'),
  title: '10. 正则表达式匹配',
  tepmlate: ({ input, output }) =>
    `输入: s = ${input[0]}, p = ${input[1]}; 输出: ${output}`,
  samples: [
    { input: ['aa', 'a'], output: false, },
    { input: ['aa', 'a*'], output: true, },
    { input: ['ab', '.*'], output: true, },
    { input: ['aab', 'c*a*b'], output: true, },
    { input: ['mississippi', 'mis*is*p*.'], output: false, },
    { input: ['aaa', 'a*a'], output: true, },
    { input: ['a', 'ab*'], output: true, },
    { input: ['aaa', 'ab*a'], output: false, },
  ],
});
