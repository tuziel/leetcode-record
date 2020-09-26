/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  var map = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sep': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12',
  };

  var [, day, month, year] = date.match(/(\d+)\w+ (\w+) (\d+)/);
  return `${year}-${map[month]}-${day.replace(/^(\d)$/, '0$1')}`;
};

module.exports = reformatDate;
