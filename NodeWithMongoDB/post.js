var http=require('http');
var fs = require('fs');

http.createServer(function(req,res){
console.log(req.method);
console.log("before get")
if (req.method=="GET") {
    console.log("after get")
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream("./form.html", "UTF-8").pipe(res);
}

else if(req.method=="POST"){
    console.log("in post")
    var body="";
    req.on("data",function(chunk){
        body+=chunk;
    })
    req.on("end",function(){
        res.end(`Data Entered in form => ${body}`)
    })
}

}).listen(3000)

console.log("Form server listening on port 3000");