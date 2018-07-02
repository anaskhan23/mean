var fs = require('fs');
try{
var data =fs.readFileSync("input.txt");
console.log("Sync Read: "+ data.toString());
}
catch(err){

console.log(err);}
console.log("Program Ended");