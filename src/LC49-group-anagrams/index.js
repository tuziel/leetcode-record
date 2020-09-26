/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var charCodes = JSON.parse('{"a":2,"b":3,"c":5,"d":7,"e":11,"f":13,"g":17,"h":19,"i":23,"j":29,"k":31,"l":37,"m":41,"n":43,"o":47,"p":53,"q":59,"r":61,"s":67,"t":71,"u":73,"v":79,"w":83,"x":89,"y":97,"z":101}');
  var indexes = {};
  var result = [];

  for (var i = 0; i < strs.length; i++) {
    var word = strs[i];
    var hashCode = 1;
    for (var j = 0; j < word.length; j++) {
      hashCode = (hashCode * charCodes[word[j]]) % 1000000007;
    }

    var index = indexes[hashCode];
    if (index !== undefined) {
      result[index].push(word);
    } else {
      indexes[hashCode] = result.length;
      result.push([word]);
    }
  }

  return result;
};

module.exports = groupAnagrams;
