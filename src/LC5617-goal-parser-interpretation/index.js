/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  return command.replace(/\(\)|\(al\)/g, function (matcher) {
    if (matcher === '()') return 'o';
    if (matcher === '(al)') return 'al';
  });
};

module.exports = interpret;
