
var products=require('./PriceBL.js')
var MongoClient =require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/Areas',function(err,db){

if(err){
console.log(err)
}
    var resultSet=db.collection('products').find().toArray(function(err,result){
        if(err) throw err;
        console.log(result);
for(var i=0;i<result.length;i++){

console.log("Price = "+products.calculatePrice(result[i].qty,result[i].price))
    }
db.close()
});
})