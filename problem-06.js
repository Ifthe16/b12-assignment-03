/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary;

for (var year = 1; year <= experience; year++) {
    currentSalary = currentSalary + currentSalary * 5 / 100;
}
console.log(currentSalary.toFixed(2));
