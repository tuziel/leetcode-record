const task = require('../task');

task({
  type: 'arguments',
  func: require('.'),
  title: '面试题13. 机器人的运动范围',
  tepmlate: ({ input, output }) =>
    `输入：m = ${input[0]}, n = ${input[1]}, k = ${input[2]}; 输出：${output}`,
  samples: [
    { input: [2, 3, 1], output: 3, },
    { input: [3, 1, 0], output: 1, },
  ],
});
