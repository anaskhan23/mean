var http =require('http')
var data=require ('./inventory');

http.createServer(function(req, res){
if(req.url==="/")
res.end(JSON.stringify(data));
else if(req.url==="/instock")
    listInStock(res);
else if(req.url==="/onbackorder")
listOnBackOrder(res);
else
res.end("404 Error..")

}).listen(3000)

console.log("Server listening")

function listInStock(res){
    var instock=data.filter(function (item){
return item.avail==="In Stock"

    })
    res.end(JSON.stringify(instock));
}
    function listOnBackOrder(res){
        var onbackorder=data.filter(function (item){
    return item.avail==="On Back Order"
    
        })
        res.end(JSON.stringify(onbackorder));
        
}
