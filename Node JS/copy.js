var fs=require('fs');

fs.unlink('input-copy.txt',function(err){
if(err)
console.error(err);
else 
console.log("removed");

});