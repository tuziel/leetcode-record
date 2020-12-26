/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  var a = 0;
  var b = 0;
  students.forEach((t) => t ? (a++) : (b++));

  while (a || b) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift() ? (a--) : (b--);
    } else if (!(a && b)) {
      return a || b;
    } else {
      students.push(students.shift());
    }
  }

  return 0;
};

module.exports = countStudents;
