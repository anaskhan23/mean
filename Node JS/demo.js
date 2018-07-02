var fs=require('fs');
var path=require('path');

fs.readdir('.',function(err, files){
if(err){
console.log("Error");

}
else{
files.forEach(function(fileName){
console.log(fileName);
var file =path.join(__dirname, fileName);
var stats =fs.statsSync(file);
if (stats.isFile) {
    console.log("Regular File");
}
else if(stats.isDirectory()){
    console.log("Directory File");
}
});
}})