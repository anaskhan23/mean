var http=require('http');
var fs = require('fs');
var qs=require('querystring')
http.createServer(function(req,res){
console.log(req.method);
if (req.method=="GET") {
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream("./form.html", "UTF-8").pipe(res);
}else if(req.method=="POST"){
    var body="";
    req.on("data",function(chunk){
        body+=chunk;
    })
    req.on("end",function(){
     var obj=qs.parse(body);
     console.log(obj);
     var objString =JSON.stringify(obj);
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(`
     <!DOCTYPE html>
<html>
<head>S
<title>Form Results </title>
</head>
<body>
<h1>Your Form Result</h1>
<p>${objString}</p>
</body>
</html>
     `)
    })
}

}).listen(3000)

console.log("Form server listening on port 3000");