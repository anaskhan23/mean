var fs=require('fs');

fs.mkdir('../N',function(err,files){
if(err)
console.log(err);
else
console.log(files);

});