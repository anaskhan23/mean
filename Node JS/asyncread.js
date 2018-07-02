const fs = require('fs');

var data =fs.readFile('input.txt.txt',function(err,data){

    if(err)
    {console.log(err);}
    else
{
console.log("Sync Read: "+ data.toString());
}});


console.log("Program Ended");