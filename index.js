const { spawn } = require('child_process');
const { resolve } = require('path');
const symbols = require('log-symbols');
const ansi = require('ansi-colors');

const process = require('process');
const argv = process.argv;
if (argv.length <= 2) {
  // eslint-disable-next-line no-console
  console.error(ansi.red('请指定测试文件'));
  process.exit();
}

const mocha = resolve(__dirname, './node_modules/mocha/bin/mocha');
const testFile = resolve(__dirname, argv[2].replace(/test(?:.js)?$/, ''), 'test.js');

// 定时器用于判断测试样例超时
let timerId = -1;
function timeout(log) {
  // eslint-disable-next-line no-console
  console.error(`\n    ${symbols.error} ${log}\n      ${ansi.red('运行超时')}`);
  testProcess.kill();
}
function setTimer(log, delay = 5000) {
  clearTimer();
  timerId = setTimeout(() => timeout(log), delay);
}
function clearTimer() {
  clearTimeout(timerId);
}

// 开启测试子进程
const testProcess = spawn(
  'node',
  [mocha, testFile],
  { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] },
);

// 测试进程每次执行样例时刷新定时器
testProcess.on('message', ({ log, delay }) => {
  setTimer(log, delay);
});

// 测试完成，关闭定时器
testProcess.on('close', () => clearTimer());
