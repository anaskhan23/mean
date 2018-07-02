var http=require('http')

var server =http.createServer(function(request, response){
console.log('request starting')

if(request.url=="/hello"){
    response.write('Hello Client')
    response.end();
}

if(request.url=="/lnt"){

    response.write('Hello Anas')
    
    response.write("{userName:anas, age:20}")
    response.end();
}


})
server.listen(3001)