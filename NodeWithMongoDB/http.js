var http=require('http');

var server = http.createServer(function(request, response){

    console.log('request starting...');

    response.write('hello Ayush Guha');
    response.end();

})
server.listen(3000)
console.log('Server running at http://172.29.122.131/')

var server = http.createServer(function(request, response){

    console.log('request starting...');

    response.write('hello Anas Khan');
    response.end();

})
server.listen(2000)