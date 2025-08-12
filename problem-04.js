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
