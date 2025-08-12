/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var divideArea = area / 2;
console.log(divideArea);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
    console.log('Laptop');
}
else if (money >= 10000) {
    console.log('Cycle');
}
else {
    console.log('Chocolate');
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (var day = 1; day <= lastDay; day++) {
    if (day % 3 === 0) {
        console.log(day.toString(), '-', 'medicine');
    }
    else {
        console.log(`${day} - rest`);
    }
}


/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
var fileNameExtension = fileName.split('.').pop();
if (fileName[0] === '#' || fileNameExtension === 'pdf' || fileNameExtension === 'docx') {
    console.log('Store');
}
else {
    console.log('Delete');
}


/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
var studentName = student.name;
var studentRoll = student['roll'];
var studentDepartment = student['department'];
var studentEmail = studentName.concat(studentRoll, '.', studentDepartment, '@ph.ac.bd');
console.log(studentEmail);


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary;

for (var year = 1; year <= experience; year++) {
    currentSalary = currentSalary + currentSalary * 5 / 100;
}
console.log(currentSalary.toFixed(2));
