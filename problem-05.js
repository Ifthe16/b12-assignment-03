/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
var studentName = student.name;
var studentRoll = student['roll'];
var studentDepartment = student['department'];
var studentEmail = studentName.concat(studentRoll, '.', studentDepartment, '@ph.ac.bd');
console.log(studentEmail);