/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  return '/' + path.split('/').reduce((res, curr) => {
    if (!curr || curr === '.') /* nop */;
    else if (curr === '..') res.pop();
    else res.push(curr);
    return res;
  }, []).join('/');
};

module.exports = simplifyPath;
